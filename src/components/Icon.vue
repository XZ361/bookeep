<template>
         <svg class="icon" @click="$emit('click',$event)">
                <use :xlink:href="'#'+name"/>
        </svg>
</template>

<script lang="ts" >
// 将一个目录里面任意后缀的文件，统一全部引入到当前
const importAll=(requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons',true,/\.svg$/));} catch (error) {console.log(error);}

    export default {
        name:'Icon',
        props:['name']
    }
</script>

<style lang="scss" scoped>
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>