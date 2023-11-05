<template>
  <div class="text-white max-w-xl mx-auto my-28">
    <div class="text-center space-y-8 mb-28">
      <div class="text-5xl">Apply for a grant</div>
      <div class="text-xl text-gray-400">
        Please complete the application below for Grant consideration! Learn
        more about the criteria used for selecting grants.
      </div>
    </div>

    <div class="space-y-8">
      <div class="text-4xl">Grant application</div>
      <form @submit.prevent="submitData" class="space-y-8">
        <div class="flex flex-col space-y-4">
          <div>Name<span class="text-red-800">*</span></div>

          <input
            v-model="this.name"
            type="text"
            class="bg-white rounded-lg py-2"
          />
        </div>

        <div class="flex flex-col space-y-4">
          <div>Email<span class="text-red-800">*</span></div>
          <div class="text-gray-400">
            Primary contact if applyin as a team/company
          </div>
          <input
            v-model="this.email"
            type="email"
            class="bg-white rounded-lg py-2"
          />
        </div>

        <div class="flex flex-col space-y-4">
          <div>About you<span class="text-red-800">*</span></div>
          <div class="text-gray-400">
            Tell us about yourself and/or your team
          </div>
          <input
            v-model="this.about"
            type="text"
            class="bg-white rounded-lg py-2"
          />
        </div>
        <div class="flex justify-center">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      about: "",
    };
  },
  methods: {
    submitData() {
      fetch(
        "https://dydx-grants-4e31a-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            about: this.about,
          }),
        }
      );
    },
  },
};
</script>

<style scoped>
input {
  padding: 0 2rem;
}
button {
  transition: all 0.5s;
}
button:hover {
  transform: scale(1.2);
  color: rgb(175, 175, 172);
}
</style>
