<script setup>
    import InputGroup from 'primevue/inputgroup';
    import InputGroupAddon from 'primevue/inputgroupaddon';
    import InputText from 'primevue/inputtext';
    import TextArea from 'primevue/textarea';
    import DatePicker from 'primevue/datepicker';
    import Checkbox from 'primevue/checkbox';
    import PickList from 'primevue/picklist';



    import 'primeicons/primeicons.css'
    const value = "hello"


    import { ref, onMounted } from 'vue';
    import { ProductService } from '../../services/ProductService';

    const products = ref(null);

    onMounted(() => {
        ProductService.getProductsSmall().then((data) => (products.value = [data, []]));
    });

    const checked = ref(false);


</script>



<template>
    <div class="taskformcontainer">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="title" :invalid="value === null"/>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <TextArea placeholder="Description" rows="5" cols="56"/>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-calendar"></i>
            </InputGroupAddon>
            <DatePicker label="Deadline" id="datepicker-24h" v-model="datetime24h" showTime hourFormat="24" fluid />
        </InputGroup>

        <InputGroup>
            <PickList v-model="products" dataKey="id" breakpoint="1400px">
                <template #option="{ option  }">
                    {{ option.name }}
                </template>
            </PickList>
        </InputGroup>




    </div>

</template>




<style scoped>
    .taskformcontainer {
        height: 52vh;
        width: 33vw; 

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;

    }
</style>






