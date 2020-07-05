<template>
    <Layout class-prefix="layout">
        <NumberPad  :value.sync="record.amount" @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <div class="notes">
          <FormItem filed-name="备注"
               @update:value="onUpdateNotes"
               placeholder="在这里输入备注"/>
        </div>
        <Tags @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  // window.localStorage.setItem('version','0.0.1');


  @Component({
    components: {Tags, FormItem, Types, NumberPad},
    computed:{
      recordList(){
        return this.$store.state.recoreList;
      }
    }
  })
  export default class Money extends Vue{
    record: RecordItem={
      tags:[],notes:'',type:'-',amount:0
    }
    created () {
      this.$store.commit('fetchRecords');
    }
    onUpdateTags(value: string[]) {	
      this.record.tags = value;	
    }
    onUpdateNotes(value: string){
      this.record.notes=value;
    }
     saveRecord() {
      this.$store.commit('createRecord',this.record);
    }
  }
</script>
<style lang="scss">
 .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes{
    padding: 12px 0;
  }
</style>