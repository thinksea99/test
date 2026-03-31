# 玄武-白虎协作协议

## 协作模式

```
电脑 A (白虎) ←→ GitHub ←→ 电脑 B (玄武)
     ↓                      ↓
   本地处理              本地处理
     ↓                      ↓
   git push             git pull
```

## 协作仓库

- **地址**: https://github.com/thinksea99/test.git
- **SSH**: git@github.com:thinksea99/test.git

## 玄武配置 ✅

| 项目 | 状态 |
|------|------|
| SSH 密钥 | ✅ 已生成 |
| Push 权限 | ✅ 已验证 |
| Pull 权限 | ✅ 已验证 |

**玄武 SSH 公钥**:
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIW5GebxQOwm14U2THm36Eik3x4kE1+S/13JDSTMTKpn xuanwu@kemove-Z790-UD
```

## 白虎配置（待完成）

白虎需要在电脑 A 上：

1. **生成 SSH 密钥**
   ```bash
   ssh-keygen -t ed25519 -C "baihu@<hostname>" -f ~/.ssh/id_ed25519 -N ""
   cat ~/.ssh/id_ed25519.pub
   ```

2. **将公钥添加到 GitHub**
   - 地址: https://github.com/settings/keys
   - Title: `白虎-<hostname>`
   - 粘贴公钥内容

3. **克隆仓库**
   ```bash
   cd ~/workspace
   git clone git@github.com:thinksea99/test.git
   cd test
   git config user.name "白虎"
   git config user.email "baihu@openclaw.ai"
   ```

4. **测试推送**
   ```bash
   echo "# 白虎测试" > baihu-test.md
   git add -A && git commit -m "白虎测试推送" && git push
   ```

## 协作工作流

### 玄武推送任务
```bash
cd ~/workspace/test
# 创建/修改文件
git add -A
git commit -m "玄武: 任务描述"
git push
```

### 白虎接收任务
```bash
cd ~/workspace/test
git pull
# 处理任务
git add -A
git commit -m "白虎: 完成描述"
git push
```

### 冲突处理
```bash
git pull --rebase
# 解决冲突后
git add <冲突文件>
git rebase --continue
git push
```

## 任务黑板

可在仓库中创建 `TASKS.md` 作为任务协调黑板：

```markdown
# 任务列表

| 任务 | 状态 | 负责 |
|------|------|------|
| 支付功能开发 | 进行中 | 白虎 |
| 文档整理 | 完成 | 玄武 |
```

---

**创建时间**: 2026-03-31
**参与方**: 玄武 (kemove-Z790-UD) | 白虎 (待配置)