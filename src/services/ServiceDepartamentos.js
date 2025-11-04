import axios from "axios";
import Global from "@/Global";

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function(resolve) {
            let request = "api/departamentos";
            let url = Global.urlApiDepartamentos + request;
            axios.get(url).then(response => {
                console.log("Leyendo departamentos");
                resolve(response.data);
            })
        })
    }

    insertDepartamento(departamento) {
        return new Promise(function(resolve) {
            let request = "api/departamentos";
            let url = Global.urlApiDepartamentos + request;
            axios.post(url, departamento).then(response => {
                resolve(response)
            })
        })
    }

    findDepartamento(idDepartamento) {
        return new Promise(function(resolve) {
            let request = "api/departamentos/" + idDepartamento;
            let url = Global.urlApiDepartamentos + request;
            let departamento = {}
            axios.get(url).then(response => {
                console.log("Find departamento");
                departamento = response.data;
                resolve(departamento)
            })
        })
    }

    updateDepartamento(departamento) {
        return new Promise(function(resolve){
            let request = "api/departamentos";
            let url = Global.urlApiDepartamentos + request;
            axios.put(url, departamento).then(response => {
                resolve(response);
            })
        }) 
    }

    deleteDepartamento(idDepartamento) {
        return new Promise(function(resolve) {
            let request = "api/departamentos/" + idDepartamento;
            let url = Global.urlApiDepartamentos + request;
            axios.delete(url).then(response => {
                resolve(response);
            })
        })
    }
}