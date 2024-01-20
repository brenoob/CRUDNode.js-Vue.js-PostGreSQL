<template>
    <div class="container d-flex justify-content-center">
        <div class="card col-xl-8 col-12">
            <div class="card-header  bg-info text-white">
                <h3>add employee</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="handleSubmitForm()" class="bg-light">
                    <!-- inicio do bloco: employee name  -->
                    <div class="form-group">
                        <label class="font-weight-bold">Employee Name</label>
                        <input type="text" class="form-control" required placeholder="Insert Name" v-model="employee.name"
                            pattern="^[a-zA-Z]+$">
                    </div>
                    <!-- fim do bloco: employee name  -->
                    <!-- inicio do bloco: job role  -->
                    <div class="form-group">
                        <label class="font-weight-bold">Job Role</label>
                        <input type="text" class="form-control" required placeholder="Insert Job Role"
                            v-model="employee.job_role">
                    </div>
                    <!-- fim do bloco: job role  -->
                    <!-- inicio do bloco: Salary  -->
                    <div class="form-group">
                        <label class="font-weight-bold">Salary</label>
                        <input type="number" class="form-control" required placeholder="Insert Salary"
                            v-model="employee.salary" min="0" max="10000000000"
                            onkeypress="if(!isNaN(event.key))return true; else return false">
                    </div>
                    <!-- fim do bloco: Salary  -->
                    <!-- inicio do bloco: Birth  -->
                    <div class="form-group">
                        <label class="font-weight-bold">Birth</label>
                        <input type="date" class="form-control" required v-model="employee.birth">
                    </div>
                    <!-- fim do bloco: Birth  -->
                    <!-- inicio do bloco: Employee Registration  -->
                    <div class="form-group">
                        <label class="font-weight-bold">Employee Registration</label>
                        <input type="text" class="form-control" required placeholder="Insert Employee Registration"
                            v-model="employee.employee_registration">
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
<script>
export default {
    name: 'CreateEmployeeComponent',
    data() {
        return {
            employee: {
                name: '',
                job_role: '',
                salary: 0,
                birth: '',
                employee_registration: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            console.log(this.employee); //test
        },
    }
}
</script>