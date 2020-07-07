<template>
    <Layout class-prefix="layout">
        <NumberPad  :value.sync="record.amount" @submit="saveRecord"/>
         <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
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
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';
  // window.localStorage.setItem('version','0.0.1');


  @Component({
    components: {Tabs,Tags, FormItem, NumberPad},
  })
  export default class Money extends Vue{
    get recordList(){
      return this.$store.state.recoreList;
    }
    recordTypeList = recordTypeList;
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
<style lang="scss" scoped>
 ::v-deep .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes{
    padding: 12px 0;
  }
</style>