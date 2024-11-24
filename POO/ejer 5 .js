//CUENTA BANCARIA//
class CuentaBancaria {
    constructor(numeroCuenta, saldo = 0) {
      this.numeroCuenta = numeroCuenta;
      this.saldo = saldo;
    }
  
    depositar(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        return `Depósito de $${cantidad} realizado. Saldo actual: $${this.saldo}`;
      } else {
        return "La cantidad debe ser mayor a 0.";
      }
    }
  
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        return `Retiro de $${cantidad} realizado. Saldo actual: $${this.saldo}`;
      } else {
        return "Saldo insuficiente o cantidad no válida.";
      }
    }
  }
  
  class CuentaAhorros extends CuentaBancaria {
    constructor(numeroCuenta, saldo) {
      super(numeroCuenta, saldo);
      this.tasaInteres = 0.05;
    }
  
    aplicarIntereses() {
      let interes = this.saldo * this.tasaInteres;
      this.saldo += interes;
      return `Interés aplicado: $${interes.toFixed(2)}. Saldo actual: $${this.saldo.toFixed(2)}`;
    }
  }
  
  class CuentaCorriente extends CuentaBancaria {
    constructor(numeroCuenta, saldo) {
      super(numeroCuenta, saldo);
    }
  }
  
  let cuentas = [];
  let cuentaActual;
  
  function crearCuenta() {
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const saldoInicial = parseFloat(document.getElementById('saldoInicial').value);
    const tipoCuenta = document.getElementById('tipoCuenta').value;
  
    if (!numeroCuenta || isNaN(saldoInicial)) {
      document.getElementById('resultado5').innerText = "Por favor, rellena todos los campos correctamente.";
      return;
    }
  
    if (tipoCuenta === 'ahorros') {
      cuentaActual = new CuentaAhorros(numeroCuenta, saldoInicial);
      document.getElementById('intereses').style.display = 'block';
    } else if (tipoCuenta === 'corriente') {
      cuentaActual = new CuentaCorriente(numeroCuenta, saldoInicial);
      document.getElementById('intereses').style.display = 'none';
    }
  
    cuentas.push(cuentaActual);
    document.getElementById('resultado5').innerText = `Cuenta ${tipoCuenta} creada con éxito. Saldo inicial: $${cuentaActual.saldo}`;
  }
  
  function realizarDeposito() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    if (cuentaActual) {
      const resultado = cuentaActual.depositar(cantidad);
      document.getElementById('resultado5').innerText = resultado;
    } else {
      document.getElementById('resultado5').innerText = "Primero crea una cuenta.";
    }
  }
  
  function realizarRetiro() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    if (cuentaActual) {
      const resultado = cuentaActual.retirar(cantidad);
      document.getElementById('resultado5').innerText = resultado;
    } else {
      document.getElementById('resultado5').innerText = "Primero crea una cuenta.";
    }
  }
  
  function aplicarIntereses() {
    if (cuentaActual instanceof CuentaAhorros) {
      const resultado = cuentaActual.aplicarIntereses();
      document.getElementById('resultado5').innerText = resultado;
    } else {
      document.getElementById('resultado5').innerText = "Esta cuenta no es de ahorros.";
    }
  }
  