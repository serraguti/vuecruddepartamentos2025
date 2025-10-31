<template>
    <div>
        <h3>Create</h3>
        <form v-on:submit.prevent="insertDepartamento()">
            <label>Id departamento</label>
            <input type="number" v-model="departamento.numero" class="form-control"/>
            <label>Nombre</label>
            <input type="text" v-model="departamento.nombre" class="form-control"/>
            <label>Localidad</label>
            <input type="text" v-model="departamento.localidad" class="form-control"/>
            <button class="btn btn-info">Create</button>
        </form>
        <h4 style="color:red">{{ mensaje }}</h4>
    </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
const service = new ServiceDepartamentos();
    export default {
        name: "CreateDepartamento", 
        methods: {
            insertDepartamento() {
                service.insertDepartamento(this.departamento).then(result => {
                    this.mensaje = "Insertado!! " + result;
                    this.$router.push("/")
                })
            }
        }, data() {
            return {
                departamento: {
                    numero: 0, 
                    nombre: "",
                    localidad: ""
                }, mensaje: ""
            }
        }
    }
</script>