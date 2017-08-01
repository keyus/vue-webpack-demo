<template lang="pug">
div.leftbar
    div.leftbar_container
        div.leftbar-logo.left-item
            router-link(to="/")
        div.leftbar-sousuo.left-item
            a.icon-sousuo
        div.leftbar-add.left-item
            a.icon-jia1
        div.logout
            a.logout-link.icon-tuichu(title="退出")
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
    .logout{
        display: flex;
        flex: 1;
        position: relative;
        width: 100%;
        .logout-link{
            cursor: pointer;
            position: absolute;
            bottom: 0;
            width: 40px;
            height: 40px;
            display: block;
            left: 50%;
            transform: translate(-50%,0);
            text-align: center;
            line-height: 40%;
            font-size: 1.8rem;
        }
    }

    .left-item{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: .5rem;
        cursor: pointer;
        &:hover{
            background-color: #07357c;
        }
        [class^="icon-"]{
            font-size: 1.5rem;
        }

    }
    .leftbar-logo{
        background: #07357c;
        margin-bottom: 2rem;
        overflow: hidden;
        background-image: url("../../../images/person.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        &:hover{
            background-color: inherit;
            opacity: .7;
        }
        a {
            display: block;
            width: 100%;
            height: 100%;
        }
    }


}

</style>

<script>
    export default {
        name: "AmLeftbar",
    }
</script>