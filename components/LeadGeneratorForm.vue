<template>
  <div>
    <form
      class="columns is-multiline"
      name="lead"
      data-netlify="true"
      ref="leadGeneratorForm"
      method="post"
      action="/was-macht-eine-gute-webseite-aus/danke/"
    >
      <input type="hidden" name="form-name" value="lead" />
      <div class="column is-6">
        <div class="field">
          <label for="name" class="label">Vorname</label>
          <div class="control has-icons-left">
            <input
              id="name"
              class="input"
              type="text"
              name="firstname"
              placeholder="Max / Susi"
            />
            <span class="icon is-small is-left">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-user fa-w-14"
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  class=""
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <label for="name" class="label">Nachname</label>
          <div class="control has-icons-left">
            <input
              id="name"
              class="input"
              type="text"
              name="lastname"
              placeholder="Müller"
            />
            <span class="icon is-small is-left">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-friends"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                class="svg-inline--fa fa-user-friends fa-w-20"
              >
                <path
                  fill="currentColor"
                  d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"
                  class=""
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="field">
          <label class="label" for="mail">E-Mail</label>
          <div class="control has-icons-left">
            <input
              id="mail"
              class="input"
              type="email"
              name="email"
              placeholder="mueller@mail.de"
            />
            <span class="icon is-small is-left">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-envelope fa-w-16"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  class=""
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="column is-6"></div>
      <div class="column is-6">
        <div class="field">
          <label class="label" for="message"
            >Dürfen wir Ihnen E-Mails schicken?</label
          >
          <div class="control">
            <div class="checkbox input">
              <input
                id="dataprotection"
                type="checkbox"
                class="contact-form--checkbox-input"
                name="dataprotection"
                required
              />
              <label for="dataprotection">
                Ja, ich würde gerne Marketing E-Mails von Tortuga Webdesign
                erhalten.
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-6"></div>
      <div class="column is-6">
        <div class="field">
          <div class="control">
            <button class="button is-rounded is-light mt-40">
              {{ download.action }}
            </button>
          </div>
        </div>
      </div>
      <div class="column is-12">
        <p class="mt-18">
          <small>
            {{ download.note }}
          </small>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "LeadGeneratorForm",
  components: {},
  props: {
    download: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss">
.checkbox {
  display: flex;
  height: auto;

  input {
    margin-right: 10px;
    margin-left: 8px;
    min-width: 13px;
  }

  label {
    cursor: pointer;
  }
}
</style>
