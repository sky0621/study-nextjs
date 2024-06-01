# study-nextjs

## init

```
npm init -y
```

### add workspace

```
npm init -y -w workspaces/shared
```

```
npm init -y -w workspaces/n1
```

## add dev package

```
npm install --save-dev typescript eslint eslint-config-next prettier @types/node @types/react @types/react-dom @storybook/react @storybook/nextjs @storybook/testing-library
```

### storybook

```
cd workspaces/shared
npx storybook@latest init
```

## add package

### shared

```
npm install -w workspaces/shared --save react react-dom next clsx
```

### n1

```
npm install -w workspaces/n1 --save react react-dom next clsx
```

