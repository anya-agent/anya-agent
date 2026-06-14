export default {
  async fetch(request, env, ctx) {
    // 默认回退。当没有匹配到任何静态 Assets 时（例如访问不存在的子路径），执行此逻辑。
    // 如果只需要渲染 index.html，这个方法可以作为 fallback。
    // 你也可以在这里直接读取并返回静态 index.html，但搭配 wrangler.json 的 assets 绑定最为纯正。
    return env.ASSETS.fetch(request);
  }
};
