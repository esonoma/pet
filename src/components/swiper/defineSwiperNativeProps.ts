export const defineSwiperNativeProps = {
	"indicator-dots": {
		type: Boolean,
		required: false,
		default: () => false,
	},
	"indicator-color": {
		type: String,
		required: false,
		default: () => "rgba(0, 0, 0, .3)",
	},
	"indicator-active-color": {
		type: String,
		required: false,
		default: () => "#000000",
	},
	"active-class": {
		type: String,
		required: false,
	},
	"changing-class": {
		type: String,
		required: false,
	},
	autoplay: {
		type: Boolean,
		required: false,
		default: () => false,
	},
	current: {
		type: Number,
		required: false,
		default: () => 0,
	},
	"current-item-id": {
		type: String,
		required: false,
	},
	interval: {
		type: Number,
		required: false,
		default: 5000,
	},
	duration: {
		type: Number,
		required: false,
		default: () => 500,
	},
	circular: {
		type: Boolean,
		required: false,
		default: () => false,
	},
	vertical: {
		type: Boolean,
		required: false,
		default: () => false,
	},
	"previous-margin": {
		type: String,
		required: false,
		default: () => "0px",
	},
	"next-margin": {
		type: String,
		required: false,
		default: () => "0px",
	},
	acceleration: {
		type: Boolean,
		required: false,
		default: () => false,
	},
	"disable-programmatic-animation": {
		type: Boolean,
		required: false,
		default: () => false,
	},
	"display-multiple-items": {
		type: Number,
		required: false,
		default: () => 1,
	},
	"skip-hidden-item-layout": {
		type: Boolean,
		required: false,
		default: () => false,
	},
	"disable-touch": {
		type: Boolean,
		required: false,
		default: () => false,
	},
	touchable: {
		type: Boolean,
		required: false,
		default: () => false,
	},
	"easing-function": {
		type: String,
		required: false,
		default: () => "default",
	},
	change: {
		type: Function,
		required: false,
	},
	transition: {
		type: Function,
		required: false,
	},
	animationfinish: {
		type: Function,
		required: false,
	},
};
