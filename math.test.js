import { describe, it, expect } from 'vitest';
import { calcularDescuento } from './math.js';

describe('Pruebas Unitarias: calcularDescuento()', () => {
  
  // 1. Camino feliz
  it('debe calcular correctamente el precio con descuento aplicado', () => {
    // Arrange
    const precio = 100;
    const descuento = 20;
    // Act
    const resultado = calcularDescuento(precio, descuento);
    // Assert
    expect(resultado).toBe(80);
  });

  // 2. Caso límite
  it('debe retornar el precio original si el descuento es 0%', () => {
    expect(calcularDescuento(100, 0)).toBe(100);
  });

  // 3. Manejo de errores
  it('debe lanzar un error si se ingresan valores negativos', () => {
    expect(() => calcularDescuento(-50, 10)).toThrow('Valores fuera del rango permitido');
  });

  it('debe lanzar un error si el porcentaje supera el 100%', () => {
    expect(() => calcularDescuento(100, 150)).toThrow('Valores fuera del rango permitido');
  });

  it('debe validar el tipo de dato de entrada', () => {
    expect(() => calcularDescuento("100", 20)).toThrow('Los parámetros deben ser números válidos');
  });

});