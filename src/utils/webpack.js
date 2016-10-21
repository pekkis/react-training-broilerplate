import ExtractTextPlugin from 'extract-text-webpack-plugin';

export function getStyleLoader(env, target, base) {

  const ret = {
    ...base,
  };

  if (env === 'production' && target === 'browser') {
    ret.loader = ExtractTextPlugin.extract(
      'style-loader',
      base.loaders
    );
    delete ret.loaders;
  } else {
    if (target === 'browser') {
      ret.loaders.unshift('style-loader');
    }
  }
  return ret;
}
