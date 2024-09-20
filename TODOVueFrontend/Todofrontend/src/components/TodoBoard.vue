<script setup>

    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';

</script>


<template>
<div class="todoboardcontainer">
    <DataTable>
        <Column field="title" header="Title"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="author" header="Author"></Column>
        <Column field="participants" header="Participants"></Column>
        <Column field="deadline" header="Deadline"></Column>
        <Column field="created_at" header="Created at"></Column>
        <Column field="updated_at" header="Last Update"></Column>
        <Column field="pending" header="Status"></Column>
    </DataTable>
</div>

</template>



<style scoped>
    .todoboardcontainer {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
