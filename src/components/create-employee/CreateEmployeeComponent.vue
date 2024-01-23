<template>
    <div class="container d-flex justify-content-center">
        <div class="card col-xl-8 col-12">
            <div class="card-header  bg-info text-white">
                <h3>add employee</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="submitForm()" class="bg-light">
                    <!-- inicio do bloco: employee name  -->
                    <div class="form-group">
                        <label class="font-weight-bold">Employee Name</label>
                        <input type="text" class="form-control" placeholder="Insert Name" v-model="employee.name"
                            :class="{ 'is-invalid': v$.name.$error }">
                        <p v-for="error of v$.name.$errors" :key="error.$uid" class="text-error text-danger">
                            <small>{{ error.$message }}</small>
                        </p>
                    </div>
                    <!-- fim do bloco: employee name  -->
                    <!-- inicio do bloco: job role  -->
                    <div class="form-group">
                        <label class="font-weight-bold">Job Role</label>
                        <input type="text" class="form-control" placeholder="Insert Job Role" v-model="employee.job_role"
                            :class="{ 'is-invalid': v$.job_role.$error }">
                        <p v-for="error of v$.job_role.$errors" :key="error.$uid" class="text-error text-danger">
                            <small>{{ error.$message }}</small>
                        </p>
                    </div>
                    <!-- fim do bloco: job role  -->
                    <!-- inicio do bloco: Salary  -->
                    <div class="form-group">
                        <label class="font-weight-bold">Salary</label>
                        <input type="number" class="form-control" placeholder="Insert Salary" v-model="employee.salary"
                        :class="{ 'is-invalid': v$.salary.$error }">
                        <p v-for="error of v$.salary.$errors" :key="error.$uid" class="text-error text-danger">
                            <small>{{ error.$message }}</small>
                        </p>
                    </div>
                    <!-- fim do bloco: Salary  -->
                    <!-- inicio do bloco: Birth  -->
                    <div class="form-group">
                        <label class="font-weight-bold">Birth</label>
                        <input type="date" class="form-control" v-model="employee.birth"
                        :class="{ 'is-invalid': v$.birth.$error }">
                        <p v-for="error of v$.birth.$errors" :key="error.$uid" class="text-error text-danger">
                            <small>{{ error.$message }}</small>
                        </p>
                    </div>
                    <!-- fim do bloco: Birth  -->
                    <!-- inicio do bloco: Employee Registration  -->
                    <div class="form-group">
                        <label class="font-weight-bold">Employee Registration</label>
                        <input type="text" class="form-control" placeholder="Insert Employee Registration"
                            v-model="employee.employee_registration"
                            :class="{ 'is-invalid': v$.employee_registration.$error }">
                        <p v-for="error of v$.employee_registration.$errors" :key="error.$uid" class="text-error text-danger">
                            <small>{{ error.$message }}</small>
                        </p>
                    </div>
                    <!-- fim do bloco: Employee Registration  -->
                    <div class="form-group">
                        <button class="btn btn-success bg-gradient">+ Employee</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useVuelidate } from "@vuelidate/core";
import { maxLength, minLength, required } from "@vuelidate/validators";

const employee = reactive({ name: '', job_role: '', salary: 0, birth: '', employee_registration: ''})
const rules = { 
    name: { required, maxLength: maxLength(200), minLength: minLength(3) }, 
    job_role: { required, minLength: minLength(2), maxLength: maxLength(47) },
    salary: { required, minLength: minLength(4), maxLength: maxLength(16)},
    birth: { required },
    employee_registration: { required, minLength: minLength(4), maxLength: maxLength(40)}
}

const v$ = useVuelidate(rules, employee)

const submitForm = async () => {
    const result = await v$.value.$validate()
    if (result) {
        alert('sucess')
    } else {
        console.log('falha')
    }
}
</script>
