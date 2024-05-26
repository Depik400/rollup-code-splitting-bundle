# Работа с rollup для code-splitting

1. Выполняем `tsc --declaration`, генерируем необходимые файлы с типами

2. Выполняем `rollup --config .\rollup.config.ts --configPlugin @rollup/plugin-typescript` для того, чтобы собрать бандл

3. выполняем node build-meta.cjs, он копирует необходимые файлы типов и package.json для каждого модуля в соотвествующую папку в dist

4. Переходим в папку dist и выполняем npm publish, публикуем пакет в npm registry

> Либо `npm run build`

Так мы собрали пакет, в котором каждый модуль находится в своей папке
Это позволяет подключать модули не из одного entry, что на практике должно улучшить tree-shaking

```js
import module1 from `<package-name>/module1`
import module2 from `<package-name>/module2`
```
