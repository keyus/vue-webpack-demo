<template lang="pug">
div.app
    am-leftbar
    am-sitemenu
    div.main
        div.page-container
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
        box-sizing: border-box;
        border-left: 2rem solid #fff;
        flex-direction: column;
        .page-container{
            display: flex;
            flex: 1;
            flex-direction: column;
            box-sizing: border-box;
            overflow-y: scroll;
            padding-bottom: 10rem;
            h1 {
                font-size: 1.71428571em;
                font-style: inherit;
                font-weight: 500;
                letter-spacing: -.01em;
                line-height: 1.16666667;
                color: #172B4D;
                padding-top: 3rem;
                padding-bottom: 2rem;
            }
            .page-container-space{
                height: 4rem;
            }
        }
    }
}
.app-header--breadcrumbs{
    margin-top: 16px;
    padding-bottom: 1.5rem;
    li{
        color: #5E6C84;
        display: inline-block;
        padding: 0 10px 0 0;
        a {
            color: #5E6C84;
        }
    }
}
</style>