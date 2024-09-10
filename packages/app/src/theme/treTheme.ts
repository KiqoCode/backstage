import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const treTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: '#343b58',
      },
      secondary: {
        main: '#565a6e',
      },
      error: {
        main: '#8c4351',
      },
      warning: {
        main: '#8f5e15',
      },
      info: {
        main: '#34548a',
      },
      success: {
        main: '#485e30',
      },
      background: {
        default: '#d5d6db',
        paper: '#d5d6db',
      },
      banner: {
        info: '#34548a',
        error: '#8c4351',
        text: '#343b58',
        link: '#565a6e',
      },
      errorBackground: '#8c4351',
      warningBackground: '#8f5e15',
      infoBackground: '#343b58',
      navigation: {
        background: '#fe8201',
        indicator: '#ff225e',
        color: '#000',
        selectedColor: '#ff225e',
      },
    },
  }),
  defaultPageTheme: 'home',
  /* below drives the header colors */
  pageTheme: {
    home: genPageTheme({ colors: ['#fe8201', '#ff225e'], shape: shapes.round }),
    documentation: genPageTheme({
      colors: ['#fe8201', '#ff225e'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#fe8201', '#ff225e'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#fe8201', '#ff225e'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#fe8201', '#ff225e'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#fe8201', '#ff225e'],
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#fe8201', '#ff225e'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#fe8201', '#ff225e'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#fe8201', '#ff225e'], shape: shapes.wave }),
  },
});