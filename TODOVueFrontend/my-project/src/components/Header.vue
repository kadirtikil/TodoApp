<script setup>
    import Button from "primevue/button";
    import Dialog from 'primevue/dialog';


    import SigninForm from "./SigninForm.vue";
    import SignupForm from "./SignupForm.vue";
    import TaskForm from "./TaskForm.vue";

    import { ref } from "vue";


    const visiblesignin = ref(false);
    const visiblesignup = ref(false);
    const visibleaddtask = ref(false);

</script>

<template>
    <div class="headercontainer">
        <h1 id="headline">Todo</h1>

        <div class="buttons">
            <Button id="signup" label="Sign In" @click="visiblesignin = true"/>
            <Button id="signup" label="Sign Up" @click="visiblesignup = true"/>
            <Button id="createTask" label="Add" @click="visibleaddtask = true"/>
        </div>

    </div>

    <Dialog v-model:visible="visiblesignin" modal header="Sign in, you probably just want to check out my work." :style="{ height: '27vh', width: '33vw' }">
        <SigninForm />
    </Dialog>

    <Dialog v-model:visible="visiblesignup" modal header="Sign up, not like you'll finish any of this." :style="{ height: '31vh', width: '33vw' }">
        <SignupForm />
    </Dialog>

    <Dialog v-model:visible="visibleaddtask" modal header="Create a Task!" :style="{ height: '70vh', width: '36vw' }">
        <TaskForm />
    </Dialog>

</template>



<style scoped>
    .headercontainer {
        height: 10vh;
        width: 100vw;

        display: grid;
        grid-template-rows: repeat(2, 5vh);
        grid-template-columns: repeat(4, 25vw);
    }

    #headline {
    }

    #headline:hover {
    }

    .buttons {
        grid-row: 1 / 3;
        grid-column: 4 / 5;

        display:flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;

    }



</style>