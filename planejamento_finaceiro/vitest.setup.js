/* eslint-disable no-undef */
// vitest.setup.js
import '@testing-library/jest-dom';

// Mock do ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  
  observe(target) {
    this.target = target;
    // Opcional: disparar callback imediatamente
    setTimeout(() => {
      this.callback([{
        target: this.target,
        contentRect: {
          width: 800,
          height: 600,
          top: 0,
          left: 0,
          bottom: 600,
          right: 800
        },
        borderBoxSize: [{ inlineSize: 800, blockSize: 600 }],
        contentBoxSize: [{ inlineSize: 800, blockSize: 600 }]
      }]);
    }, 0);
  }
  
  unobserve() {
    // Não faz nada
  }
  
  disconnect() {
    // Não faz nada
  }
};

// Mock do HTMLCanvasElement (para os gráficos)
class HTMLCanvasElementMock {
  constructor() {
    this.style = {};
    this.width = 800;
    this.height = 600;
  }
  
  getContext(contextType) {
    if (contextType !== '2d') return null;
    
    return {
      fillRect: () => {},
      clearRect: () => {},
      getImageData: () => ({ data: [] }),
      putImageData: () => {},
      createImageData: () => [],
      setTransform: () => {},
      drawImage: () => {},
      save: () => {},
      fillText: () => {},
      restore: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      closePath: () => {},
      stroke: () => {},
      translate: () => {},
      scale: () => {},
      rotate: () => {},
      arc: () => {},
      fill: () => {},
      measureText: () => ({ width: 0 }),
      transform: () => {},
      rect: () => {},
      clip: () => {},
      createLinearGradient: () => ({
        addColorStop: () => {}
      }),
      createPattern: () => ({}),
    };
  }
  
  toDataURL() {
    return 'data:image/png;base64,mock';
  }
}

global.HTMLCanvasElement = HTMLCanvasElementMock;
global.HTMLCanvasElement.prototype.getContext = HTMLCanvasElementMock.prototype.getContext;