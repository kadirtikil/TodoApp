<script setup>
    import Card from 'primevue/card';


    // Fetch the Task data here then display as loop in the DOM
</script>



<template>
    <div class="taskboardcontainer">
        <div class="taskcontainer">
            <Card>
                <template #title>conatins the title of a post</template>
                <template #content>
                    <p>Desciription..........</p>
                    <p>all the other Data.</p>
                </template>
            </Card>
        </div>
    </div>
</template>



<style scoped>
    .taskboardcontainer {
        height: 85vh;
        width: 100vw;

        background-color: rgb(63, 62, 62);

        display: grid;
        grid-template-rows: repeat(4, 21.25vh);
        grid-template-columns: repeat(4, 25vw);


    }



</style>