function MathService(MathFactory){
    this.calcularQuadrado = function(a){
        return MathFactory.multiplicar(a, a)
    }
}