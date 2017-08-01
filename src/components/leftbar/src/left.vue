<template lang="pug">
    div.leftbar
        div.leftbar_container 你好，helloworld


</template>

<style lang="scss">

.leftbar {
    background: #0747A6;
    display: flex;
    flex-shrink: 0;

    .leftbar_container {
        align-items: center;
        color: #DEEBFF;
        background-color: #0747A6;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 24px 8px 24px;
        width: 64px;
    }
}

</style>

<script>
    export default {
        name: "AmLeftbar",
    }
</script>