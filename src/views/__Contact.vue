<template>
  <transition mode="out-in" name="fade" appear>
    <div id="contact">
      <h2>Contact</h2>
      <h3>
        Step: {{ stepNumber }}
      </h3>
      <keep-alive>
        <FormName v-if="stepNumber === 1" @update="updateForm"></FormName>
        <FormContact v-if="stepNumber === 2" @update="updateForm"></FormContact>
        <FormBirthDay v-if="stepNumber === 3" @update="updateForm"></FormBirthDay>
        <FormConfirm v-if="stepNumber === 4"></FormConfirm>
      </keep-alive>
      
      <button class="btn btn-primary" @click="backStep" v-show="stepNumber != 1">Back</button>
      <button class="btn btn-primary" @click="nextStep" v-show="stepNumber != 4">Next</button>

      <pre><code>{{ form }}</code></pre>
    </div>
  </transition>
</template>

<script>
import FormName from '@/components/FormName'
import FormContact from '@/components/FormContact'
import FormBirthDay from '@/components/FormBirthDay'
import FormConfirm from '@/components/FormConfirm'


export default {
  components: { 
    FormName,
    FormContact,
    FormBirthDay,
    FormConfirm,
  },
  data() {
    return {
      stepNumber: 1,
      form: {
        firstName: null,
        lastName: null,
        Email: null,
        tel: null,
        birthday: null
      }
    }
  },
  methods:{
		updateForm(formData){
			Object.assign(this.form, formData);
    },
    backStep:function() {
      this.stepNumber--
    },			
    nextStep:function(){
      this.stepNumber++
    },
	}
}
</script>

<style scoped>
#contact {
  margin-top: 80px;
  color: #fff;
}
</style>
