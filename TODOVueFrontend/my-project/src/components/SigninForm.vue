<script setup>
    import InputGroup from 'primevue/inputgroup';
    import InputGroupAddon from 'primevue/inputgroupaddon';
    import InputText from 'primevue/inputtext';

    import 'primeicons/primeicons.css'
</script>



<template>
    <div class="signinformcontainer">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Username Or Email" />
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <InputText placeholder="Password"/>
        </InputGroup>
    </div>

</template>




<style scoped>
    .signin formcontainer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }
</style>






