

// 子组件
<template>

  <div class="child-comp">
    this is child component
    <!--非具名插槽-->
    <slot></slot>
    <!--具名插槽-->
    <slot name="child"></slot>
    <slot name="child1"></slot>
    <!--作用域插槽-->
    <slot name="child2" :user="user"></slot>
    <!--循环列表的具名作用域插槽-->
    <ul>
      <li v-for="item in lists" :key="item.id">
        <slot name="list" :message="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {
          name: 'child2'
        }
      }
    },
    created () {
      this.lists = [{
       id: 1,
       year: 2019,
       age: 12
      }, {
       id: 2,
       year: 2019,
       age: 13
      }, {
       id: 3,
       year: 2019,
       age: 12
      }, {
       id: 1,
       year: 2019,
       age: 14
      }]
    }
  }
</script>
<style less scoped>
  .child-comp {
    background-color: #fafafa;
  }
</style>
// 父组件
<template>
    <div class="parent-comp">
        this is parent component
    <slot-child>
      <!--非具名插槽的使用-->
      <template v-slot:child>
        <div>
          this is  default child component
        </div>
      </template>
      <!--具名插槽动态使用-->
      <template v-slot:[slotType]>
        <div>
          this is  {{slotType}} component
        </div>
      </template>
      <!--作用域插槽的使用-->
      <template v-slot:child2="comp">
        <div>
          this is  second child component<br/>
          <span>component name: {{comp.user.name}}</span>
        </div>
      </template>
      <!--具名作用域插槽的循环列表使用-->
      <template v-slot:list="{message}">
          <div>
            <p>year: {{message.year}}</p>
            <p>age: {{message.age}}</p>
          </div>
      </template>
    </slot-child>
    <button @click="changeSlot">change slot</button>
    </div>
</template>
<script>
import SlotChild from './SlotChild.vue'

export default {
  components: {
    SlotChild
  },
    data () {
    return {
      name: 'parent',
      slotType: 'child'
    }
    },
  methods: {
    changeSlot () {
      if (this.slotType === 'child') {
        this.slotType = 'child1'
      } else if (this.slotType === 'child1') {
        this.slotType = 'child'
      }
    }
  }
}
</script>
<style less scoped>
  .parent-comp {
    background-color: #f2f2f2;
  }
</style>