# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "bootstrap" # @5.3.6
pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
pin "vue", to: 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.min.js'
pin_all_from "app/javascript/components", under: "components"
