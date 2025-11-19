import { reactive, computed} from "vue";

const estado = reactive({
    items: []
})

export function useCarrito(){
    function agregar(producto){
        const existente = estado.items.find(it => it.id === producto.id);

        if(existente){
            existente.cantidad += producto.cantidad ?? 1;
        }else{
            estado.items.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad ?? 1
            })
        }
    }

    function quitar(index){
        estado.items.splice(index, 1);
    }

    function reducirCantidad(index, cantidad = 1){
        const item = estado.items [index];

        if(!item) return;

        item.cantidad -= cantidad;

        if(item.cantidad <= 0){
            quitar(index)
        }
    }

    const cantidad = computed(() =>
        estado.items.reduce((ac, it) => ac + (it.cantidad || 0), 0)
    )

    const total = computed(() =>
        estado.items.reduce((ac, it) => ac + it.precio * (it.cantidad || 1), 0)
    )

    return{estado, agregar, quitar, reducirCantidad, cantidad, total};
}

