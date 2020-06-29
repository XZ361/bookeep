<template>
    <div>
        <nav>
            <router-link to="/money" class="item" active-class="selected">
            <Icon name="money"/>
            记账
            </router-link>
            <router-link to="/labels" class="item" active-class="selected">
            <icon name="label"/>
            标签
            </router-link>
            <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics"/>
            统计
            </router-link>
        </nav>
    </div>

</template>

<script lang="ts">

    export default {
        name:'Nav'
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav{
    display: flex;
    box-shadow:0 0 3px rgba(0 ,0,0,.35);
    flex-direction: row;
    font-size: 12px;
    > .item{
        /*让icon三分，并且剧中*/
        width: 33.3333%;
        padding: 2px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        flex-direction: column;
        .icon{
            width:32px;
            height: 32px;
        }
    }
    >.item.selected{
        color: $color-highlight;
    }
}
</style>