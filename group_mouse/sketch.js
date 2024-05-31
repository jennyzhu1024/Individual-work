// findex: parents number
let parents = [
  { findex: 0, x: 0, y: 0.02, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 1, x: 0, y: 0.15, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 2, x: 0, y: 0.35, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 3, x: 0, y: 0.43, height: 0.02, width: 0.98, color: "#fdeb19" },
  { findex: 4, x: 0, y: 0.56, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 5, x: 0, y: 0.63, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 6, x: 0, y: 0.69, height: 0.02, width: 0.13, color: "#fdeb19" },
  { findex: 7, x: 0.05, y: 0.72, height: 0.02, width: 0.54, color: "#fdeb19" },
  { findex: 8, x: 0, y: 0.78, height: 0.02, width: 0.08, color: "#fdeb19" },
  { findex: 9, x: 0, y: 0.85, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 10, x: 0, y: 0.88, height: 0.02, width: 0.05, color: "#fdeb19" },
  { findex: 11, x: 0, y: 0.95, height: 0.02, width: 1, color: "#fdeb19" },
  { findex: 12, x: 0.02, y: 0, height: 0.35, width: 0.02, color: "#fdeb19" },
  { findex: 13, x: 0.05, y: 0, height: 1, width: 0.02, color: "#fdeb19" },
  { findex: 14, x: 0.11, y: 0, height: 0.95, width: 0.02, color: "#fdeb19" },
  { findex: 15, x: 0.22, y: 0, height: 1, width: 0.02, color: "#fdeb19" },
  { findex: 16, x: 0.53, y: 0, height: 1, width: 0.02, color: "#fdeb19" },
  { findex: 17, x: 0.58, y: 0, height: 1, width: 0.02, color: "#fdeb19" },
  { findex: 18, x: 0.84, y: 0, height: 1, width: 0.02, color: "#fdeb19" },
  { findex: 19, x: 0.88, y: 0, height: 0.37, width: 0.02, color: "#fdeb19" },
  { findex: 20, x: 0.92, y: 0, height: 0.8, width: 0.02, color: "#fdeb19" },
  { findex: 21, x: 0.96, y: 0, height: 1, width: 0.02, color: "#fdec22" },
  { findex: 22, x: 0.13, y: 0.05, height: 0.03, width: 0.08, color: "#fcf11f" },
  { findex: 23, x: 0.15, y: 0.04, height: 0.11, width: 0.04, color: "#fd1e24" },
  { findex: 24, x: 0.26, y: 0.04, height: 0.09, width: 0.08, color: "#fd1c28" },
  { findex: 25, x: 0.26, y: 0.13, height: 0.02, width: 0.08, color: "#f0edd1" },
  { findex: 26, x: 0.9, y: 0.1, height: 0.03, width: 0.06, color: "#244ec9" },
  { findex: 27, x: 0.07, y: 0.19, height: 0.06, width: 0.06, color: "#1f47c3" },
  { findex: 28, x: 0.13, y: 0.27, height: 0.07, width: 0.09, color: "#feea26" },
  { findex: 29, x: 0.65, y: 0.17, height: 0.18, width: 0.09, color: "#294fc4" },
  { findex: 30, x: 0.16, y: 0.35, height: 0.1, width: 0.05, color: "#ffea20" },
  { findex: 31, x: 0.4, y: 0.35, height: 0.08, width: 0.07, color: "#fff02b" },
  { findex: 32, x: 0.13, y: 0.49, height: 0.07, width: 0.09, color: "#fa242e" },
  { findex: 33, x: 0.28, y: 0.45, height: 0.02, width: 0.07, color: "#fbed1d" },
  { findex: 34, x: 0.28, y: 0.47, height: 0.09, width: 0.07, color: "#1d49c1" },
  { findex: 35, x: 0.4, y: 0.45, height: 0.11, width: 0.07, color: "#fde92e" },
  { findex: 36, x: 0.65, y: 0.45, height: 0.18, width: 0.03, color: "#fef32b" },
  { findex: 37, x: 0.7, y: 0.45, height: 0.11, width: 0.08, color: "#fd2f34" },
  { findex: 38, x: 0.7, y: 0.58, height: 0.02, width: 0.08, color: "#fd2f34" },
  { findex: 39, x: 0.86, y: 0.48, height: 0.05, width: 0.1, color: "#fcf234" },
  { findex: 40, x: 0.9, y: 0.48, height: 0.05, width: 0.02, color: "#fe3b32" },
  { findex: 41, x: 0.07, y: 0.67, height: 0.05, width: 0.06, color: "#183dc2" },
  { findex: 42, x: 0.13, y: 0.78, height: 0.07, width: 0.09, color: "#ffe720" },
  { findex: 43, x: 0.86, y: 0.67, height: 0.06, width: 0.06, color: "#2b51d1" },
  { findex: 44, x: 0.86, y: 0.73, height: 0.1, width: 0.06, color: "#fcf13a" },
  { findex: 45, x: 0.94, y: 0.73, height: 0.1, width: 0.02, color: "#fdf944" },
  { findex: 46, x: 0.45, y: 0.95, height: 0.09, width: 0.06, color: "#f5272e" },
  { findex: 47, x: 0.88, y: 0.2, height: 0.06, width: 0.06, color: "#fd2b2d" },
];

let children = [
  { findex: 0, x: 0.14, y: 0.02, height: 0.02, width: 0.02, color: "#273364" },
  { findex: 0, x: 0.32, y: 0.02, height: 0.02, width: 0.03, color: "#fdf2c3" },
  { findex: 0, x: 0.51, y: 0.02, height: 0.02, width: 0.11, color: "#f9eec6" },
  { findex: 0, x: 0.71, y: 0.02, height: 0.02, width: 0.04, color: "#fdf2b9" },
  { findex: 0, x: 0.82, y: 0.02, height: 0.02, width: 0.02, color: "#fcf0ce" },
  { findex: 0, x: 0.94, y: 0.02, height: 0.02, width: 0.02, color: "#f8f1cd" },
  { findex: 0, x: 0.98, y: 0.02, height: 0.02, width: 0.02, color: "#f8f1cd" },
  { findex: 1, x: 0.15, y: 0.15, height: 0.02, width: 0.04, color: "#f7e9c0" },
  { findex: 1, x: 0.19, y: 0.15, height: 0.02, width: 0.03, color: "#fc2429" },
  { findex: 1, x: 0.24, y: 0.15, height: 0.02, width: 0.02, color: "#f7e9c0" },
  { findex: 1, x: 0.29, y: 0.15, height: 0.02, width: 0.03, color: "#1f3686" },
  { findex: 1, x: 0.35, y: 0.15, height: 0.02, width: 0.03, color: "#fdf3b5" },
  { findex: 1, x: 0.51, y: 0.15, height: 0.02, width: 0.12, color: "#fbf7d6" },
  { findex: 1, x: 0.73, y: 0.15, height: 0.02, width: 0.03, color: "#fbf5d4" },
  { findex: 1, x: 0.82, y: 0.15, height: 0.02, width: 0.06, color: "#f7e9c0" },
  { findex: 1, x: 0.9, y: 0.15, height: 0.02, width: 0.02, color: "#fe2a36" },
  { findex: 1, x: 0.94, y: 0.15, height: 0.02, width: 0.02, color: "#f7f7e0" },
  { findex: 2, x: 0.02, y: 0.35, height: 0.02, width: 0.02, color: "#ec2723" },
  { findex: 2, x: 0.13, y: 0.35, height: 0.02, width: 0.02, color: "#ec2723" },
  { findex: 2, x: 0.2, y: 0.35, height: 0.02, width: 0.02, color: "#eaf9e1" },
  { findex: 2, x: 0.27, y: 0.35, height: 0.02, width: 0.03, color: "#eaf9e1" },
  { findex: 2, x: 0.33, y: 0.35, height: 0.02, width: 0.03, color: "#263d9d" },
  { findex: 2, x: 0.38, y: 0.35, height: 0.02, width: 0.03, color: "#ec2723" },
  { findex: 2, x: 0.47, y: 0.35, height: 0.02, width: 0.02, color: "#2d4091" },
  { findex: 2, x: 0.64, y: 0.35, height: 0.02, width: 0.03, color: "#ec2723" },
  { findex: 2, x: 0.74, y: 0.35, height: 0.02, width: 0.02, color: "#ec2723" },
  { findex: 2, x: 0.94, y: 0.35, height: 0.02, width: 0.02, color: "#2c4299" },
  { findex: 3, x: 0.01, y: 0.43, height: 0.02, width: 0.02, color: "#ec2723" },
  { findex: 3, x: 0.13, y: 0.43, height: 0.02, width: 0.1, color: "#f4f0cd" },
  { findex: 3, x: 0.28, y: 0.43, height: 0.02, width: 0.03, color: "#ec2723" },
  { findex: 3, x: 0.31, y: 0.43, height: 0.02, width: 0.04, color: "#f3f1d8" },
  { findex: 3, x: 0.38, y: 0.43, height: 0.02, width: 0.02, color: "#ec2723" },
  { findex: 3, x: 0.4, y: 0.43, height: 0.02, width: 0.07, color: "#f9f6dc" },
  { findex: 3, x: 0.47, y: 0.43, height: 0.02, width: 0.02, color: "#304298" },
  { findex: 3, x: 0.63, y: 0.43, height: 0.02, width: 0.02, color: "#ec2723" },
  { findex: 3, x: 0.65, y: 0.43, height: 0.02, width: 0.03, color: "#fbf9d9" },
  { findex: 3, x: 0.7, y: 0.43, height: 0.02, width: 0.02, color: "#fcf9e2" },
  { findex: 3, x: 0.77, y: 0.43, height: 0.02, width: 0.02, color: "#3246a2" },
  { findex: 3, x: 0.9, y: 0.43, height: 0.02, width: 0.02, color: "#f9f8df" },
  { findex: 4, x: 0.03, y: 0.56, height: 0.02, width: 0.02, color: "#ebf1d6" },
  { findex: 4, x: 0.27, y: 0.56, height: 0.02, width: 0.02, color: "#ebf1d6" },
  { findex: 4, x: 0.33, y: 0.56, height: 0.02, width: 0.03, color: "#f82730" },
  { findex: 4, x: 0.4, y: 0.56, height: 0.02, width: 0.02, color: "#f82730" },
  { findex: 4, x: 0.47, y: 0.56, height: 0.02, width: 0.03, color: "#f82730" },
  { findex: 4, x: 0.7, y: 0.56, height: 0.02, width: 0.02, color: "#303a9c" },
  { findex: 4, x: 0.72, y: 0.56, height: 0.02, width: 0.05, color: "#fcf8e5" },
  { findex: 4, x: 0.77, y: 0.56, height: 0.02, width: 0.02, color: "#37419c" },
  { findex: 4, x: 0.94, y: 0.56, height: 0.02, width: 0.02, color: "#f7f6e0" },
  { findex: 4, x: 0.03, y: 0.56, height: 0.02, width: 0.02, color: "#ebf1d6" },
  { findex: 4, x: 0.03, y: 0.56, height: 0.02, width: 0.02, color: "#ebf1d6" },
  { findex: 4, x: 0.03, y: 0.56, height: 0.02, width: 0.02, color: "#ebf1d6" },
  { findex: 5, x: 0.04, y: 0.63, height: 0.02, width: 0.01, color: "#f5eccd" },
  { findex: 5, x: 0.18, y: 0.63, height: 0.02, width: 0.02, color: "#fdf6cf" },
  { findex: 5, x: 0.28, y: 0.63, height: 0.02, width: 0.02, color: "#fdf6cf" },
  { findex: 5, x: 0.35, y: 0.63, height: 0.02, width: 0.02, color: "#2f3e87" },
  { findex: 5, x: 0.41, y: 0.63, height: 0.02, width: 0.02, color: "#f82730" },
  { findex: 5, x: 0.47, y: 0.63, height: 0.02, width: 0.03, color: "#2b3d9f" },
  { findex: 5, x: 0.65, y: 0.63, height: 0.02, width: 0.03, color: "#fef6d8" },
  { findex: 5, x: 0.71, y: 0.63, height: 0.02, width: 0.03, color: "#2e3f99" },
  { findex: 5, x: 0.77, y: 0.63, height: 0.02, width: 0.02, color: "#2e3f99" },
  { findex: 5, x: 0.94, y: 0.63, height: 0.02, width: 0.02, color: "#fdf6cf" },
  { findex: 5, x: 0.98, y: 0.63, height: 0.02, width: 0.02, color: "#df383d" },
  { findex: 5, x: 0.18, y: 0.63, height: 0.02, width: 0.02, color: "#fdf6cf" },
  { findex: 6, x: 0.01, y: 0.69, height: 0.02, width: 0.03, color: "#223a7a" },
  { findex: 7, x: 0.17, y: 0.72, height: 0.02, width: 0.03, color: "#f2eab7" },
  { findex: 7, x: 0.29, y: 0.72, height: 0.02, width: 0.03, color: "#f2eab7" },
  { findex: 7, x: 0.37, y: 0.72, height: 0.02, width: 0.02, color: "#2d3c99" },
  { findex: 7, x: 0.43, y: 0.72, height: 0.02, width: 0.03, color: "#f82d34" },
  { findex: 7, x: 0.49, y: 0.72, height: 0.02, width: 0.02, color: "#313994" },
  { findex: 7, x: 0.56, y: 0.72, height: 0.02, width: 0.02, color: "#f43431" },
  { findex: 8, x: 0.02, y: 0.78, height: 0.02, width: 0.02, color: "#212f81" },
  { findex: 9, x: 0.02, y: 0.85, height: 0.02, width: 0.02, color: "#ece6c1" },
  { findex: 9, x: 0.17, y: 0.85, height: 0.02, width: 0.02, color: "#f52230" },
  { findex: 9, x: 0.19, y: 0.85, height: 0.02, width: 0.02, color: "#ebebc7" },
  { findex: 9, x: 0.31, y: 0.85, height: 0.02, width: 0.02, color: "#ece6c1" },
  { findex: 9, x: 0.39, y: 0.85, height: 0.02, width: 0.02, color: "#2e2f89" },
  { findex: 9, x: 0.43, y: 0.85, height: 0.02, width: 0.02, color: "#fa1f2d" },
  { findex: 9, x: 0.47, y: 0.85, height: 0.02, width: 0.02, color: "#2e2f89" },
  { findex: 9, x: 0.5, y: 0.85, height: 0.02, width: 0.02, color: "#f22035" },
  { findex: 9, x: 0.62, y: 0.85, height: 0.02, width: 0.02, color: "#283492" },
  { findex: 9, x: 0.67, y: 0.85, height: 0.02, width: 0.02, color: "#f52831" },
  { findex: 9, x: 0.71, y: 0.85, height: 0.02, width: 0.02, color: "#222f99" },
  { findex: 9, x: 0.78, y: 0.85, height: 0.02, width: 0.02, color: "#ece6c1" },
  { findex: 9, x: 0.9, y: 0.85, height: 0.02, width: 0.02, color: "#313ba0" },
  { findex: 10, x: 0.02, y: 0.88, height: 0.02, width: 0.03, color: "#f4232f" },
  { findex: 11, x: 0.03, y: 0.95, height: 0.02, width: 0.03, color: "#f1eac2" },
  { findex: 11, x: 0.17, y: 0.95, height: 0.02, width: 0.02, color: "#f52230" },
  { findex: 11, x: 0.3, y: 0.95, height: 0.02, width: 0.02, color: "#f1eac2" },
  { findex: 11, x: 0.35, y: 0.95, height: 0.02, width: 0.02, color: "#f1eac2" },
  { findex: 11, x: 0.39, y: 0.95, height: 0.02, width: 0.02, color: "#273784" },
  { findex: 11, x: 0.43, y: 0.95, height: 0.02, width: 0.03, color: "#2b337e" },
  { findex: 11, x: 0.61, y: 0.95, height: 0.02, width: 0.02, color: "#f22828" },
  { findex: 11, x: 0.66, y: 0.95, height: 0.02, width: 0.02, color: "#2c3779" },
  { findex: 11, x: 0.71, y: 0.95, height: 0.02, width: 0.02, color: "#453753" },
  { findex: 11, x: 0.77, y: 0.95, height: 0.02, width: 0.02, color: "#f7f1cc" },
  { findex: 11, x: 0.89, y: 0.95, height: 0.02, width: 0.02, color: "#f23430" },
  { findex: 12, x: 0.02, y: 0.02, height: 0.02, width: 0.02, color: "#233e6b" },
  { findex: 12, x: 0.02, y: 0.04, height: 0.02, width: 0.02, color: "#e6e7ad" },
  { findex: 12, x: 0.02, y: 0.09, height: 0.02, width: 0.02, color: "#233e6b" },
  { findex: 12, x: 0.02, y: 0.15, height: 0.02, width: 0.02, color: "#f82427" },
  { findex: 12, x: 0.02, y: 0.21, height: 0.02, width: 0.02, color: "#264784" },
  { findex: 12, x: 0.02, y: 0.27, height: 0.02, width: 0.02, color: "#f72d30" },
  { findex: 12, x: 0.02, y: 0.33, height: 0.02, width: 0.02, color: "#efefd5" },
  { findex: 13, x: 0.05, y: 0, height: 0.02, width: 0.02, color: "#fd1d24" },
  { findex: 13, x: 0.05, y: 0.04, height: 0.02, width: 0.02, color: "#f0edb5" },
  { findex: 13, x: 0.05, y: 0.09, height: 0.02, width: 0.02, color: "#fd1d24" },
  { findex: 13, x: 0.05, y: 0.13, height: 0.02, width: 0.02, color: "#f1eac0" },
  { findex: 13, x: 0.05, y: 0.17, height: 0.02, width: 0.02, color: "#f1eac0" },
  { findex: 13, x: 0.05, y: 0.25, height: 0.02, width: 0.02, color: "#f1eac0" },
  { findex: 13, x: 0.05, y: 0.35, height: 0.02, width: 0.02, color: "#1e3886" },
  { findex: 13, x: 0.05, y: 0.43, height: 0.02, width: 0.02, color: "#1e3886" },
  { findex: 13, x: 0.05, y: 0.5, height: 0.02, width: 0.02, color: "#f32e35" },
  { findex: 13, x: 0.05, y: 0.54, height: 0.02, width: 0.02, color: "#f1ebce" },
  { findex: 13, x: 0.05, y: 0.56, height: 0.02, width: 0.02, color: "#223c69" },
  { findex: 13, x: 0.05, y: 0.63, height: 0.02, width: 0.02, color: "#fb2632" },
  { findex: 13, x: 0.05, y: 0.67, height: 0.01, width: 0.02, color: "#e7e5d5" },
  { findex: 13, x: 0.05, y: 0.68, height: 0.02, width: 0.02, color: "#ef2435" },
  { findex: 13, x: 0.05, y: 0.7, height: 0.02, width: 0.02, color: "#e7e5d5" },
  { findex: 13, x: 0.05, y: 0.72, height: 0.02, width: 0.02, color: "#f02b31" },
  { findex: 13, x: 0.05, y: 0.78, height: 0.02, width: 0.02, color: "#f02b31" },
  { findex: 13, x: 0.05, y: 0.8, height: 0.02, width: 0.02, color: "#edeabf" },
  { findex: 13, x: 0.05, y: 0.85, height: 0.02, width: 0.02, color: "#1e3069" },
  { findex: 13, x: 0.05, y: 0.87, height: 0.02, width: 0.02, color: "#f1e8b0" },
  { findex: 13, x: 0.05, y: 0.93, height: 0.02, width: 0.02, color: "#f1e8b0" },
  { findex: 13, x: 0.05, y: 0.95, height: 0.02, width: 0.02, color: "#ef2133" },
  { findex: 14, x: 0.11, y: 0.05, height: 0.03, width: 0.02, color: "#f0eec4" },
  { findex: 14, x: 0.11, y: 0.09, height: 0.02, width: 0.02, color: "#22366f" },
  { findex: 14, x: 0.11, y: 0.15, height: 0.02, width: 0.02, color: "#22366f" },
  { findex: 14, x: 0.11, y: 0.27, height: 0.02, width: 0.02, color: "#fb2b30" },
  { findex: 14, x: 0.11, y: 0.29, height: 0.04, width: 0.02, color: "#f4f1cb" },
  { findex: 14, x: 0.11, y: 0.33, height: 0.02, width: 0.02, color: "#22366f" },
  { findex: 14, x: 0.11, y: 0.35, height: 0.02, width: 0.02, color: "#ecedcd" },
  { findex: 14, x: 0.11, y: 0.37, height: 0.02, width: 0.02, color: "#22366f" },
  { findex: 14, x: 0.11, y: 0.39, height: 0.04, width: 0.02, color: "#efefd1" },
  { findex: 14, x: 0.11, y: 0.43, height: 0.02, width: 0.02, color: "#f02d33" },
  { findex: 14, x: 0.11, y: 0.51, height: 0.02, width: 0.02, color: "#1f3883" },
  { findex: 14, x: 0.11, y: 0.56, height: 0.02, width: 0.02, color: "#1f3883" },
  { findex: 14, x: 0.11, y: 0.63, height: 0.02, width: 0.02, color: "#1f3883" },
  { findex: 14, x: 0.11, y: 0.72, height: 0.02, width: 0.02, color: "#f02c2a" },
  { findex: 14, x: 0.11, y: 0.77, height: 0.02, width: 0.02, color: "#202f5c" },
  { findex: 14, x: 0.11, y: 0.79, height: 0.01, width: 0.02, color: "#f4ddb1" },
  { findex: 14, x: 0.11, y: 0.81, height: 0.02, width: 0.02, color: "#f02b31" },
  { findex: 14, x: 0.11, y: 0.85, height: 0.02, width: 0.02, color: "#202c88" },
  { findex: 14, x: 0.11, y: 0.87, height: 0.01, width: 0.02, color: "#dedfc8" },
  { findex: 14, x: 0.11, y: 0.89, height: 0.02, width: 0.02, color: "#202c88" },
  { findex: 14, x: 0.11, y: 0.93, height: 0.02, width: 0.02, color: "#efe7ba" },
  { findex: 14, x: 0.11, y: 0.95, height: 0.02, width: 0.02, color: "#683554" },
  { findex: 15, x: 0.22, y: 0, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 15, x: 0.22, y: 0.04, height: 0.02, width: 0.02, color: "#feecb7" },
  { findex: 15, x: 0.22, y: 0.09, height: 0.02, width: 0.02, color: "#22366f" },
  { findex: 15, x: 0.22, y: 0.14, height: 0.02, width: 0.02, color: "#293e9a" },
  { findex: 15, x: 0.22, y: 0.18, height: 0.02, width: 0.02, color: "#f8f4c2" },
  { findex: 15, x: 0.22, y: 0.21, height: 0.02, width: 0.02, color: "#293f9a" },
  { findex: 15, x: 0.22, y: 0.27, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 15, x: 0.22, y: 0.3, height: 0.02, width: 0.02, color: "#f1eec5" },
  { findex: 15, x: 0.22, y: 0.35, height: 0.02, width: 0.02, color: "#284087" },
  { findex: 15, x: 0.22, y: 0.37, height: 0.02, width: 0.02, color: "#eaecd2" },
  { findex: 15, x: 0.22, y: 0.43, height: 0.02, width: 0.02, color: "#284087" },
  { findex: 15, x: 0.22, y: 0.45, height: 0.02, width: 0.02, color: "#eeefd6" },
  { findex: 15, x: 0.22, y: 0.49, height: 0.02, width: 0.02, color: "#f9eed6" },
  { findex: 15, x: 0.22, y: 0.54, height: 0.02, width: 0.02, color: "#f9eed6" },
  { findex: 15, x: 0.22, y: 0.56, height: 0.02, width: 0.02, color: "#1f3883" },
  { findex: 15, x: 0.22, y: 0.63, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 15, x: 0.22, y: 0.67, height: 0.02, width: 0.02, color: "#fbf2d4" },
  { findex: 15, x: 0.22, y: 0.72, height: 0.02, width: 0.02, color: "#22367f" },
  { findex: 15, x: 0.22, y: 0.78, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 15, x: 0.22, y: 0.79, height: 0.02, width: 0.02, color: "#e7e4cc" },
  { findex: 15, x: 0.22, y: 0.84, height: 0.02, width: 0.02, color: "#e7e4cc" },
  { findex: 15, x: 0.22, y: 0.85, height: 0.02, width: 0.02, color: "#22367f" },
  { findex: 15, x: 0.22, y: 0.87, height: 0.02, width: 0.02, color: "#dfd9c5" },
  { findex: 15, x: 0.22, y: 0.89, height: 0.02, width: 0.02, color: "#ec222f" },
  { findex: 15, x: 0.22, y: 0.89, height: 0.02, width: 0.02, color: "#ec222f" },
  { findex: 15, x: 0.22, y: 0.93, height: 0.02, width: 0.02, color: "#eae4d2" },
  { findex: 15, x: 0.22, y: 0.95, height: 0.02, width: 0.02, color: "#223286" },
  { findex: 16, x: 0.53, y: 0, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 16, x: 0.53, y: 0.04, height: 0.03, width: 0.02, color: "#fcecbf" },
  { findex: 16, x: 0.53, y: 0.08, height: 0.02, width: 0.02, color: "#2c304c" },
  { findex: 16, x: 0.53, y: 0.11, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 16, x: 0.53, y: 0.15, height: 0.02, width: 0.02, color: "#303663" },
  { findex: 16, x: 0.53, y: 0.21, height: 0.03, width: 0.02, color: "#f2252a" },
  { findex: 16, x: 0.53, y: 0.24, height: 0.02, width: 0.02, color: "#f5f4d0" },
  { findex: 16, x: 0.53, y: 0.3, height: 0.02, width: 0.02, color: "#2b408d" },
  { findex: 16, x: 0.53, y: 0.35, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 16, x: 0.53, y: 0.37, height: 0.02, width: 0.02, color: "#f9f8dc" },
  { findex: 16, x: 0.53, y: 0.39, height: 0.02, width: 0.02, color: "#363e8e" },
  { findex: 16, x: 0.53, y: 0.43, height: 0.02, width: 0.02, color: "#f9f8e0" },
  { findex: 16, x: 0.53, y: 0.49, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 16, x: 0.53, y: 0.56, height: 0.02, width: 0.02, color: "#fefcdf" },
  { findex: 16, x: 0.53, y: 0.61, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 16, x: 0.53, y: 0.63, height: 0.02, width: 0.02, color: "#fef9e4" },
  { findex: 16, x: 0.53, y: 0.65, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 16, x: 0.53, y: 0.67, height: 0.02, width: 0.02, color: "#fcfbe6" },
  { findex: 16, x: 0.53, y: 0.72, height: 0.02, width: 0.02, color: "#f8f0d7" },
  { findex: 16, x: 0.53, y: 0.78, height: 0.02, width: 0.02, color: "#223497" },
  { findex: 16, x: 0.53, y: 0.83, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 16, x: 0.53, y: 0.85, height: 0.02, width: 0.02, color: "#2a327d" },
  { findex: 16, x: 0.53, y: 0.87, height: 0.02, width: 0.02, color: "#f0eac6" },
  { findex: 16, x: 0.53, y: 0.93, height: 0.02, width: 0.02, color: "#f2252a" },
  { findex: 16, x: 0.53, y: 0.95, height: 0.02, width: 0.02, color: "#f4eac0" },
  { findex: 17, x: 0.58, y: 0.04, height: 0.02, width: 0.02, color: "#f8efa9" },
  { findex: 17, x: 0.58, y: 0.06, height: 0.02, width: 0.02, color: "#fc262a" },
  { findex: 17, x: 0.58, y: 0.09, height: 0.02, width: 0.02, color: "#f8efa9" },
  { findex: 17, x: 0.58, y: 0.13, height: 0.02, width: 0.02, color: "#f8efa9" },
  { findex: 17, x: 0.58, y: 0.15, height: 0.02, width: 0.02, color: "#ff2725" },
  { findex: 17, x: 0.58, y: 0.18, height: 0.03, width: 0.02, color: "#f8efa9" },
  { findex: 17, x: 0.58, y: 0.22, height: 0.02, width: 0.02, color: "#ff2725" },
  { findex: 17, x: 0.58, y: 0.25, height: 0.02, width: 0.02, color: "#fdf6cf" },
  { findex: 17, x: 0.58, y: 0.3, height: 0.02, width: 0.02, color: "#faf9d8" },
  { findex: 17, x: 0.58, y: 0.35, height: 0.02, width: 0.02, color: "#2e4093" },
  { findex: 17, x: 0.58, y: 0.37, height: 0.06, width: 0.02, color: "#fefffa" },
  { findex: 17, x: 0.58, y: 0.43, height: 0.02, width: 0.02, color: "#fdf9e1" },
  { findex: 17, x: 0.58, y: 0.49, height: 0.02, width: 0.02, color: "#344198" },
  { findex: 17, x: 0.58, y: 0.54, height: 0.02, width: 0.02, color: "#fb3234" },
  { findex: 17, x: 0.58, y: 0.56, height: 0.02, width: 0.02, color: "#fffce3" },
  { findex: 17, x: 0.58, y: 0.63, height: 0.02, width: 0.02, color: "#fdfae0" },
  { findex: 17, x: 0.58, y: 0.65, height: 0.02, width: 0.02, color: "#3a3971" },
  { findex: 17, x: 0.58, y: 0.69, height: 0.02, width: 0.02, color: "#faf9d6" },
  { findex: 17, x: 0.58, y: 0.72, height: 0.02, width: 0.02, color: "#f9f5d4" },
  { findex: 17, x: 0.58, y: 0.77, height: 0.02, width: 0.02, color: "#f52836" },
  { findex: 17, x: 0.58, y: 0.79, height: 0.02, width: 0.02, color: "#faefa7" },
  { findex: 17, x: 0.58, y: 0.85, height: 0.02, width: 0.02, color: "#f5292f" },
  { findex: 17, x: 0.58, y: 0.87, height: 0.02, width: 0.02, color: "#f4edd2" },
  { findex: 17, x: 0.58, y: 0.93, height: 0.02, width: 0.02, color: "#2d3677" },
  { findex: 17, x: 0.58, y: 0.95, height: 0.02, width: 0.02, color: "#fdedb2" },
  { findex: 18, x: 0.84, y: 0.02, height: 0.02, width: 0.02, color: "#31376a" },
  { findex: 18, x: 0.84, y: 0.04, height: 0.03, width: 0.02, color: "#faeed1" },
  { findex: 18, x: 0.84, y: 0.1, height: 0.02, width: 0.02, color: "#31376a" },
  { findex: 18, x: 0.84, y: 0.15, height: 0.02, width: 0.02, color: "#31376a" },
  { findex: 18, x: 0.84, y: 0.22, height: 0.02, width: 0.02, color: "#fa2c2f" },
  { findex: 18, x: 0.84, y: 0.28, height: 0.02, width: 0.02, color: "#f4f1ed" },
  { findex: 18, x: 0.84, y: 0.3, height: 0.02, width: 0.02, color: "#31376a" },
  { findex: 18, x: 0.84, y: 0.35, height: 0.02, width: 0.02, color: "#31376a" },
  { findex: 18, x: 0.84, y: 0.41, height: 0.02, width: 0.02, color: "#f8f5e1" },
  { findex: 18, x: 0.84, y: 0.43, height: 0.02, width: 0.02, color: "#fe3032" },
  { findex: 18, x: 0.84, y: 0.49, height: 0.02, width: 0.02, color: "#31376a" },
  { findex: 18, x: 0.84, y: 0.56, height: 0.02, width: 0.02, color: "#fa3633" },
  { findex: 18, x: 0.84, y: 0.6, height: 0.02, width: 0.02, color: "#faf9e2" },
  { findex: 18, x: 0.84, y: 0.63, height: 0.02, width: 0.02, color: "#334397" },
  { findex: 18, x: 0.84, y: 0.65, height: 0.02, width: 0.02, color: "#f2f6e0" },
  { findex: 18, x: 0.84, y: 0.7, height: 0.02, width: 0.02, color: "#fd363d" },
  { findex: 18, x: 0.84, y: 0.74, height: 0.02, width: 0.02, color: "#31449c" },
  { findex: 18, x: 0.84, y: 0.8, height: 0.02, width: 0.02, color: "#31376a" },
  { findex: 18, x: 0.84, y: 0.85, height: 0.02, width: 0.02, color: "#f72a2d" },
  { findex: 18, x: 0.84, y: 0.89, height: 0.02, width: 0.02, color: "#f9f2d5" },
  { findex: 18, x: 0.84, y: 0.95, height: 0.02, width: 0.02, color: "#273c95" },
  { findex: 18, x: 0.84, y: 0.97, height: 0.02, width: 0.02, color: "#f0eece" },
  { findex: 19, x: 0.88, y: 0, height: 0.02, width: 0.02, color: "#fa282c" },
  { findex: 19, x: 0.88, y: 0.02, height: 0.02, width: 0.02, color: "#f9eab5" },
  { findex: 19, x: 0.88, y: 0.04, height: 0.02, width: 0.02, color: "#2e3c58" },
  { findex: 19, x: 0.88, y: 0.06, height: 0.02, width: 0.02, color: "#fff1cb" },
  { findex: 19, x: 0.88, y: 0.09, height: 0.02, width: 0.02, color: "#fa282c" },
  { findex: 19, x: 0.88, y: 0.13, height: 0.02, width: 0.02, color: "#f7f1cb" },
  { findex: 19, x: 0.88, y: 0.18, height: 0.1, width: 0.02, color: "#fffbd9" },
  { findex: 19, x: 0.88, y: 0.3, height: 0.02, width: 0.02, color: "#2e4180" },
  { findex: 19, x: 0.88, y: 0.35, height: 0.02, width: 0.02, color: "#fa2c2e" },
  { findex: 19, x: 0.88, y: 0.13, height: 0.02, width: 0.02, color: "#f7f1cb" },
  { findex: 19, x: 0.88, y: 0.13, height: 0.02, width: 0.02, color: "#f7f1cb" },
  { findex: 19, x: 0.88, y: 0.13, height: 0.02, width: 0.02, color: "#f7f1cb" },
  { findex: 20, x: 0.92, y: 0.02, height: 0.02, width: 0.02, color: "#38425b" },
  { findex: 20, x: 0.92, y: 0.04, height: 0.02, width: 0.02, color: "#f8eecb" },
  { findex: 20, x: 0.92, y: 0.08, height: 0.02, width: 0.02, color: "#f7f0d0" },
  { findex: 20, x: 0.92, y: 0.12, height: 0.04, width: 0.02, color: "#fdffef" },
  { findex: 20, x: 0.92, y: 0.18, height: 0.06, width: 0.02, color: "#fcf5d1" },
  { findex: 20, x: 0.92, y: 0.25, height: 0.03, width: 0.02, color: "#fbf8de" },
  { findex: 20, x: 0.92, y: 0.3, height: 0.02, width: 0.02, color: "#fafce0" },
  {
    findex: 20,
    x: 0.92,
    y: 0.35,
    height: 0.02,
    width: 0.02,
    color: "#fcf8e3b",
  },
  { findex: 20, x: 0.92, y: 0.39, height: 0.02, width: 0.02, color: "#f8fae6" },
  { findex: 20, x: 0.92, y: 0.43, height: 0.02, width: 0.02, color: "#fd3a38" },
  { findex: 20, x: 0.92, y: 0.45, height: 0.11, width: 0.02, color: "#feffeb" },
  { findex: 20, x: 0.92, y: 0.56, height: 0.02, width: 0.02, color: "#2a44ad" },
  { findex: 20, x: 0.92, y: 0.63, height: 0.02, width: 0.02, color: "#f73935" },
  { findex: 20, x: 0.92, y: 0.65, height: 0.02, width: 0.02, color: "#feffeb" },
  { findex: 20, x: 0.92, y: 0.7, height: 0.04, width: 0.02, color: "#feffeb" },
  { findex: 20, x: 0.92, y: 0.74, height: 0.02, width: 0.02, color: "#2642a4" },
  { findex: 20, x: 0.92, y: 0.63, height: 0.02, width: 0.02, color: "#f73935" },
  { findex: 20, x: 0.92, y: 0.63, height: 0.02, width: 0.02, color: "#f73935" },
  { findex: 21, x: 0.96, y: 0, height: 0.02, width: 0.02, color: "#fb2d35" },
  { findex: 21, x: 0.96, y: 0.04, height: 0.02, width: 0.02, color: "#fb2d35" },
  { findex: 21, x: 0.96, y: 0.06, height: 0.02, width: 0.02, color: "#f9ffc9" },
  { findex: 21, x: 0.96, y: 0.09, height: 0.02, width: 0.02, color: "#fb2d35" },
  { findex: 21, x: 0.96, y: 0.13, height: 0.02, width: 0.02, color: "#f7f5c7" },
  { findex: 21, x: 0.96, y: 0.15, height: 0.03, width: 0.02, color: "#2c4281" },
  { findex: 21, x: 0.96, y: 0.18, height: 0.02, width: 0.02, color: "#f8f7e1" },
  { findex: 21, x: 0.96, y: 0.22, height: 0.02, width: 0.02, color: "#2946af" },
  { findex: 21, x: 0.96, y: 0.24, height: 0.02, width: 0.02, color: "#f7f9df" },
  { findex: 21, x: 0.96, y: 0.29, height: 0.02, width: 0.02, color: "#fb2d35" },
  { findex: 21, x: 0.96, y: 0.35, height: 0.02, width: 0.02, color: "#f1f3dd" },
  { findex: 21, x: 0.96, y: 0.41, height: 0.02, width: 0.02, color: "#f1f3dd" },
  { findex: 21, x: 0.96, y: 0.43, height: 0.02, width: 0.02, color: "#fb2d35" },
  { findex: 21, x: 0.96, y: 0.49, height: 0.02, width: 0.02, color: "#314ca5" },
  { findex: 21, x: 0.96, y: 0.51, height: 0.02, width: 0.02, color: "#f5f6e3" },
  { findex: 21, x: 0.96, y: 0.56, height: 0.02, width: 0.02, color: "#fb2d35" },
  { findex: 21, x: 0.96, y: 0.6, height: 0.02, width: 0.02, color: "#fdfae0" },
  { findex: 21, x: 0.96, y: 0.65, height: 0.02, width: 0.02, color: "#fdfae0" },
  { findex: 21, x: 0.96, y: 0.71, height: 0.02, width: 0.02, color: "#fb2d35" },
  { findex: 21, x: 0.96, y: 0.73, height: 0.02, width: 0.02, color: "#f0f1dd" },
  { findex: 21, x: 0.96, y: 0.74, height: 0.02, width: 0.02, color: "#2b47a6" },
  { findex: 21, x: 0.96, y: 0.8, height: 0.02, width: 0.02, color: "#fb2d35" },
  { findex: 21, x: 0.96, y: 0.85, height: 0.02, width: 0.02, color: "#fb2d35" },
  { findex: 21, x: 0.96, y: 0.89, height: 0.02, width: 0.02, color: "#f8f6e2" },
  { findex: 21, x: 0.96, y: 0.95, height: 0.02, width: 0.02, color: "#f72b32" },
  { findex: 23, x: 0.15, y: 0.09, height: 0.02, width: 0.04, color: "#f4e6be" },
  { findex: 24, x: 0.28, y: 0.07, height: 0.03, width: 0.04, color: "#f0edd1" },
  { findex: 28, x: 0.16, y: 0.28, height: 0.03, width: 0.04, color: "#f9edab" },
  { findex: 29, x: 0.65, y: 0.23, height: 0.09, width: 0.09, color: "#fc242d" },
  { findex: 29, x: 0.67, y: 0.26, height: 0.04, width: 0.05, color: "#fef227" },
  { findex: 30, x: 0.17, y: 0.39, height: 0.03, width: 0.03, color: "#f7f1c4" },
  { findex: 34, x: 0.29, y: 0.5, height: 0.04, width: 0.04, color: "#fde92e" },
  { findex: 35, x: 0.4, y: 0.47, height: 0.06, width: 0.07, color: "#f9f8e4" },
  { findex: 36, x: 0.65, y: 0.5, height: 0.02, width: 0.03, color: "#fcfadd" },
  { findex: 36, x: 0.65, y: 0.56, height: 0.02, width: 0.03, color: "#fd2f34" },
  { findex: 36, x: 0.65, y: 0.6, height: 0.02, width: 0.03, color: "#fd2f34" },
  { findex: 37, x: 0.72, y: 0.48, height: 0.04, width: 0.05, color: "#fcf7e5" },
  { findex: 42, x: 0.16, y: 0.8, height: 0.03, width: 0.03, color: "#e6e5cf" },
  { findex: 44, x: 0.86, y: 0.76, height: 0.04, width: 0.06, color: "#fb2d33" },
  { findex: 45, x: 0.94, y: 0.76, height: 0.04, width: 0.02, color: "#fdffe9" },
];
let width, height;
let canvas;

let patterns = [];
let hoverMargin; // Decreased hover effect range

class myPattern {
  constructor(x, y, width, height, color, isParent) {
    // (x,y) coordinate and myPattern's width and height and color
    this.x = x + width / 2;
    this.y = y + height / 2;
    this.originalWidth = width;
    this.originalHeight = height;
    this.color = color;
    this.originalColor = color;
    this.hovered = false;
    this.isParent = isParent;
  }

  show() {
    stroke(0);
    strokeWeight(0.1);
    if (!this.isParent) {
      // Only change color for non-parent patterns
      if (this.hovered) {
        let newSize = map(
          dist(
            mouseX,
            mouseY,
            this.x + this.originalWidth / 2,
            this.y + this.originalHeight / 2
          ),
          0,
          hoverMargin,
          1.8,
          1.2
        );
        let targetWidth = this.originalWidth * newSize;
        let targetHeight = this.originalHeight * newSize;
        // Smoothly transition to a new color
        // millis() is used to record current millisecond
        let t = (millis() / 1000) % 1;
        let noiseValue = noise(t);
        let targetColor = lerpColor(
          color(this.originalColor),
          color("#ff69b4"),
          noiseValue
        );

        fill(targetColor);
        rect(this.x, this.y, targetWidth, targetHeight);
      } else {
        fill(this.color);
        rect(this.x, this.y, this.originalWidth, this.originalHeight);
      }
    } else {
      fill(this.color); // Parents maintain their original color
      rect(this.x, this.y, this.originalWidth, this.originalHeight); // Parents maintain their original size
    }
  }

  update() {
    this.hovered = this.isMouseOver();
  }

  // Check the area
  isMouseOver() {
    let hoverX1 = this.x - hoverMargin;
    let hoverX2 = this.x + this.originalWidth + hoverMargin;
    let hoverY1 = this.y - hoverMargin;
    let hoverY2 = this.y + this.originalHeight + hoverMargin;
    return (
      mouseX >= hoverX1 &&
      mouseX <= hoverX2 &&
      mouseY >= hoverY1 &&
      mouseY <= hoverY2
    );
  }
}

function setup() {
  // Calculate the width and height after scaling before drawing
  height = windowHeight - 20;
  width = height;
  hoverMargin = width / 6;
  canvas = createCanvas(width, height);
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  canvas.style("border", "0.1px solid black");
  background("#fffdf1");
  rectMode(CENTER);
  patterns = [];

  // Iterate through the rows_and_columns array and create myPattern instances
  for (let i = 0; i < parents.length; i++) {
    let parentPattern = new myPattern(
      parents[i].x * width,
      parents[i].y * height,
      parents[i].width * width,
      parents[i].height * height,
      parents[i].color,
      true // Set isParent flag to true
    );
    patterns.push(parentPattern);

    for (let j = 0; j < children.length; j++) {
      if (children[j].findex == parents[i].findex) {
        let childPattern = new myPattern(
          children[j].x * width,
          children[j].y * height,
          children[j].width * width,
          children[j].height * height,
          children[j].color,
          false // Set isParent flag to false
        );
        patterns.push(childPattern);
      }
    }
  }
}

function draw() {
  background("#fffdf1");
  for (let pattern of patterns) {
    pattern.update();
    pattern.show();
  }
}

// Define the windowResized function to handle window resizing events
function windowResized() {
  setup();
}
