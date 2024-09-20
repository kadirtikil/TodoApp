<script setup >
    function clickedHeadline() {
        console.log("clicked the headline")
    }
</script>


<template>     
<div class="headercontainer">
    <h1 id="headline" v-on:click="clickedHeadline">Another generic ToDo App</h1>
</div>
</template>


<style scoped>
    .headercontainer {
        display: flex;
        justify-content: center;
        align-items: center;

        user-select: none;
    }

    #headline:hover {
        box-shadow: 0px 0px 10px 10px rgba(60, 243, 199, 0.73);
        background-color: rgb(60, 243, 199);
        cursor: pointer;
        border-radius: 7px;
    }
</style>

