<template>
    <div>
        <h1>Update</h1>
        <router-link to="/">Back to index</router-link>
        <form v-on:submit.prevent="updateDepartamento()"
        v-if="departamento">
            <label>Id</label>
            <input type="number" class="form-control"
             v-model="departamento.numero" disabled/>
            <label>Nombre</label>
            <input type="text" v-model="departamento.nombre" class="form-control"/>
            <label>Localidad</label>
            <input type="text" v-model="departamento.localidad" class="form-control"/>
            <button class="btn btn-info">
                Update
            </button>
        </form>
    </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
const service = new ServiceDepartamentos();
    export default {
        name: "UpdateDepartamento", 
        methods: {
            updateDepartamento() {
                service.updateDepartamento(this.departamento).then(() => {
                    console.log("Updated");
                    this.$router.push("/details/" 
                        + this.departamento.numero 
                        + "/" + this.departamento.nombre 
                        + "/" + this.departamento.localidad
                    )
                })
            }
        },
        mounted() {
            let id = this.$route.params.id;
            service.findDepartamento(id).then(result => {
                this.departamento = result
            })
        }, data() {
            return {
                departamento: null
            }
        }
    }
</script>