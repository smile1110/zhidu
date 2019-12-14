<template>
    <div>
        <!-- <el-form> -->
            <editor @input="handelIncrease"></editor>
        <!-- </el-form> -->
    </div>
</template>

<script>
import editor from "../../../components/TextEditor.vue";
// console.log( editor )
export default {
    name: 'richtext',
    components: {
        editor
    },
    data() {
        return {
            
        }
    },
    methods:{
        handelIncrease(step) {
           console.log("step",step)
        }
    }
}

</script>

<style scoped>
</style>