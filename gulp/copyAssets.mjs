import gulp from 'gulp';

const copySvg = () =>
  gulp.src('source/img/**/*.svg', {base: 'source'})
    .pipe(gulp.dest('build'));

const copyImages = () =>
  gulp.src('source/img/**/*.{png,jpg,webp}', {base: 'source'})
    .pipe(gulp.dest('build'));

const copy = () =>
  gulp.src([
    'source/**.html',
    'source/*.webmanifest',
    'source/fonts/**',
    'source/img/**',
    'source/favicons/**',
    'source/*.ico'
  ], {
    base: 'source',
  })
    .pipe(gulp.dest('build'));

export {copy, copyImages, copySvg};
