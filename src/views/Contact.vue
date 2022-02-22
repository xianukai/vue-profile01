<template>
  <transition mode="out-in" name="fade" appear>
    <div id="contact">
      <div class="form__control">
        <label for="" class="form__label">
          名前
        </label>
        <input
          class="form__input"
          v-model="name"
          type="text"
          name="name"
        >
      </div>
      <div class="form__control">
        <label for="" class="form__label">
          性別
        </label>
        <select name="gender" class="form__input" v-model="gender">
          <option value="male">男性</option>
          <option value="female">女性</option>
          <option value="other">その他</option>
        </select>
      </div>
      <div class="form__control">
        <label for="" class="form__label">
          問い合わせの種別
        </label>
        <div class="form__radioList">
          <div class="form__radioItem">
            <input name="kind" id="kind1" value="kind1" v-model="kind" type="radio">
            <label for="kind1">問い合わせ1</label>
          </div>
          <div class="form__radioItem">
            <input name="kind" id="kind2" value="kind2" v-model="kind" type="radio">
            <label for="kind2">問い合わせ2</label>
          </div>
          <div class="form__radioItem">
            <input name="kind" id="kind3" value="kind3" v-model="kind" type="radio">
            <label for="kind3">問い合わせ3</label>
          </div>
        </div>
      </div>
      <div class="form__control">
        <label for="" class="form__label">
          問い合わせ内容<span>必須</span>
        </label>
        <textarea v-model="content.value" name="content" class="form__input" @input="checkContentValue">
        </textarea>
        <p class="form__count">あと<strong>{{contentCount}}</strong>文字</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      content: '',
      gender: 'male',
      kind: 'kind1',
      contentLimitNum: 300,
    }
  },
  computed: {
    contentCount() {
      return this.contentLimitNum - this.content.length
    },
  }
  
}
</script>

<style lang="scss" scoped>
#contact {
  margin-top: 80px;
  color: #fff;
  min-height: 70vh;
}
</style>
