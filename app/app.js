var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Esta es mi primera vez en Vue',
        see: false,
        pollerias: [
            { nombre: 'Pardos' },
            { nombre: 'Norkys' },
            { nombre: 'Kykos' },
            { nombre: 'La Leña' }
        ],
        valor1: "valor por defecto",
        venta: 0,
        envio: 0,
        subtotal: 0,
        impuestos: 0,
        total: 0,
        precios: {
            cerveza: 6.5,
            espumante: 12.5,
            vino: 15
        },
        cerveza: 0,
        espumante: 0,
        vino: 0,
        costos: {
            cerveza: 0,
            espumante: 0,
            vino: 0
        },
        tragos: {
            subtotal: 0,
            impuestos: 0,
            total: 0
        }
    },
    methods: {
        showMessage: function () {
            this.see = true;
            const alerta = "Este es el titulo: " + this.titulo;
            alert(alerta);
        },
        calcularMonto: function() {
            this.subtotal = Number(this.venta) + Number(this.envio);
            this.impuestos = Number(this.subtotal)*0.18;
            this.total = Number(this.subtotal) + Number(this.impuestos);
        },
        calculaTotalesTragos: function() {
            this.tragos.cantidad = Number(this.cerveza) + Number(this.espumante) + Number(this.vino);
            this.tragos.subtotal = Number(this.costos.cerveza) + Number(this.costos.espumante) + Number(this.costos.vino);
            this.tragos.impuestos = Number(this.tragos.subtotal)*0.18;
            this.tragos.total = Number(this.tragos.subtotal) + Number(this.tragos.impuestos);
        },
        calcularCerveza: function() {            
            const precio = this.precios.cerveza*Number(this.cerveza);
            this.costos.cerveza = precio;
            this.calculaTotalesTragos();
        },
        calcularEspumante: function() {
            const precio = this.precios.espumante*Number(this.espumante);
            this.costos.espumante = precio;
            this.calculaTotalesTragos();
        },
        calcularVino: function() {
            const precio = this.precios.vino*Number(this.vino);
            this.costos.vino = precio;
            this.calculaTotalesTragos();
        }
    }
})