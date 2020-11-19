<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 bg-purple text-white p-4">
        <h5 class="font-weight-bold">Brightness and Contrast Developer Test</h5>
        <h6>18 Nov, 2020 - 19 Nov, 2020</h6>
      </div>
    </div>
    <div class="row mb-4 justify-content-center">
      <div class="col-10 d-flex justify-content-center no-padding">
        <img src="../assets/jacaranda-blooms.jpg" alt="" class="img-fluid" />
        <span class="position-absolute align-bottom">
          <img
            src="../assets/profile.jpg"
            alt="avatar"
            class="rounded-circle border"
            style="width: 7em"
          />
        </span>
      </div>
    </div>
    <div class="row my-2 justify-content-center">
      <div class="col-10">
        <div class="card m-2">
          <div class="card-body">
            <h5 class="text-green">Brightness</h5>
            <div class="green">
              <vue-slider
                v-model="valueBrightness"
                v-on:change="emitChange(valueBrightness, 'brightness')"
                v-bind="options"
              ></vue-slider>
            </div>
            <p class="text-small">Slide to adjust image brightness &#x1F31E;</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-2 justify-content-center">
      <div class="col-10">
        <div class="card m-2">
          <div class="card-body">
            <h5 class="text-blue">Contrast</h5>
            <div class="blue">
              <vue-slider
                v-model="valueContrast"
                v-on:change="emitChange(valueContrast, 'contrast')"
                v-bind="options"
              ></vue-slider>
            </div>
            <p class="text-small">Slide to adjust image contrast &#x1F313;</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-2 justify-content-center">
      <div class="col-10">
        <div class="card m-2 mb-4">
          <div class="card-body">
            <div class="form-group form-row">
              <div class="col-12">
                <canvas ref="canvas" class="img-fluid"></canvas>
              </div>
              <div
                class="col-12 d-flex align-items-center justify-content-between text-uppercase font-weight-bold"
              >
                <div class="input-group my-3 mr-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Name</span>
                  </div>
                  <input
                    type="text"
                    class="form-control text-uppercase font-weight-bold text-green d-block text-truncate"
                    placeholder="File name"
                    aria-label="file-name"
                    aria-describedby="basic-addon1"
                    v-model="fileName"
                    disabled
                  />
                </div>
                <input type="file" id="file" v-on:change="loadImage" />
                <label for="file" class = "d-flex "><span class = "fa fa-caret-up mr-2"></span>Upload</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
  name: "GraphicEditor",
  props: {},
  components: {
    VueSlider,
  },
  data() {
    return {
      imageData: "",
      fileName: "",
      valueBrightness: 0,
      valueContrast: 0,
      options: {
        min: -100,
        max: 100,
        interval: 1,
        show: true,
        speed: 1,
        disabled: true,
      },
      cnv: null,
      ctx: null,
    };
  },
  methods: {
    getCanvas() {
      this.cnv = this.$refs.canvas;
      this.ctx = this.cnv.getContext("2d");
    },
    loadImage: function (event) {
      let input = event.target;
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
          this.fileName = input.files[0].name;
          this.imgToCanvas(this.imageData);
          this.options.disabled = false;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    imgToCanvas(uploadedImg) {
      let img = new Image();
      img.src = uploadedImg;
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0, this.cnv.width, this.cnv.height);
      };
    },
    emitChange(value, type) {
      switch (type) {
        case "brightness": {
          this.brightnessImage(value);
          break;
        }
        case "contrast": {
          this.contrastImage(value);
          break;
        }
        default:
          break;
      }
    },

    contrastImage(contrast) {
      let img = this.ctx.getImageData(0, 0, this.cnv.width, this.cnv.height);
      let imgData = img.data;
      let factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

      for (var i = 0; i < imgData.length; i += 4) {
        imgData[i] = factor * (imgData[i] - 128) + 128;
        imgData[i + 1] = factor * (imgData[i + 1] - 128) + 128;
        imgData[i + 2] = factor * (imgData[i + 2] - 128) + 128;
      }
      this.ctx.putImageData(img, 0, 0);
    },

    brightnessImage(brightness) {
      let img = this.ctx.getImageData(0, 0, this.cnv.width, this.cnv.height);
      let imgData = img.data;
      for (var i = 0; i < imgData.length; i += 4) {
        imgData[i] += 255 * (brightness / 100);
        imgData[i + 1] += 255 * (brightness / 100);
        imgData[i + 2] += 255 * (brightness / 100);
      }
      this.ctx.putImageData(img, 0, 0);
    },
  },
  mounted() {
    this.getCanvas();
  },
};
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css");
body {
  background-color: grey;
}
.bg-purple {
  background-color: #7344c0;
}

.text-green {
  color: #25a95b;
}

.text-blue {
  color: #4a90e2;
}
.text-small {
  font-size: 0.9em;
}

.align-bottom {
  bottom: -15px;
  z-index: 10;
}

[type="file"] {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
}

[type="file"] + label {
  color: #4a90e2;
  padding: 0.375em 0.75em;
  border: 2px solid #dcdee4;
  border-radius: 0.25em;
  background-color: transparent;
  margin-top: 1em;
  margin-bottom: 1em;
}

[type="file"]:focus + label,
[type="file"] + label:hover {
  background-color: #e2e2e2;
}

[type="file"]:focus + label {
  background-color: #e2e2e2;
}

.input-group-text {
  background-color: #e2e2e2;
  color: #8392a6;
  font-weight: bold;
}

canvas {
  width: 100%;
}

.card {
  box-shadow: 2px 2px 10px 10px rgba(51, 49, 49, 0.116);
}

.no-padding {
  padding-left: 0;
  padding-right: 0;
}

.border {
  border: 3px solid white !important;
}
</style>
