<template>
  <div>
    <p class="btn" :style="{ color: textColor, backgroundColor: bgColor }">{{text}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
  type: 'button',
  props: {
    text: {
      type: [String, Number],
      default: '立即报名'
    },
    textColor: {
      type: [String, Number],
      default: '#ffffff'
    },
    bgColor: {
      type: [String, Number],
      default: '#FD7217'
    }
  },
  settings: [
    {
      type: 'input',
      label: '按钮文字:',
      name: 'text'
    }, {
      type: 'colorPicker',
      label: '文本颜色:',
      name: 'textColor'
    }, {
      type: 'colorPicker',
      label: '按钮主题色:',
      name: 'bgColor'
    }
  ]
};
</script>

<style lang="less" type="text/less" scoped>
  .btn {
    width: 6.8rem;
    text-align: center;
    line-height: 0.8rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    margin: 0.1rem 0.2rem;
    font-size: 0.32rem;
    &:active {
      box-shadow: 0 2px 5px -2px rgba(0, 0, 0, .8),
                  inset 0 0 10px 10px rgba(243, 114, 23, .8);
    }
  }
</style>

