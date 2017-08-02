<template lang="pug">
div.app
    am-leftbar
    am-sitemenu
    div.main
        transition(name="slide")
            router-view

</template>

<style lang="scss">
.app{
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    height: 100vh;
    .main {
        display: flex;
        flex: 1;
        background: #fff;
    }
}
</style>