---
title: "8.3 弱酸弱碱与近似"
chapter: 8
unit: 8.3
status: draft-v0.1
estimated_study_time: "150–195分钟"
level: core
---

# 8.3 弱酸弱碱与近似

## 本课要解决的问题

弱酸弱碱为什么不能按完全反应直接计算pH？\(K_a\)、\(K_b\)和
\(\mathrm pK_a\)分别表达什么？怎样从平衡常数、物料守恒和电荷守恒得到组成？常见
\(\sqrt{KC}\)公式从哪里来，何时可以使用？为什么稀释弱酸会提高百分电离，却使
\([\ce{H3O+}]\)和酸度下降？共轭酸碱对为什么满足\(K_aK_b=K_w\)？

本课的核心不是背近似式，而是：

```text
先写活度平衡
→ 再声明浓度近似
→ 用ICE表或守恒建立精确代数式
→ 必要时作小x近似
→ 回代原式验证
```

---

## 学习目标

完成本课后，你应该能够：

1. 写出单质子弱酸的\(K_a\)活度表达式；
2. 写出弱碱的\(K_b\)活度表达式；
3. 用\(\mathrm pK_a=-\log K_a\)比较同条件下的酸强弱；
4. 用ICE表建立弱酸或弱碱的二次方程；
5. 求单质子弱酸的精确浓度近似解；
6. 推导\([\ce{H3O+}]\approx\sqrt{K_aC_a}\)；
7. 推导\([\ce{OH-}]\approx\sqrt{K_bC_b}\)；
8. 用回代和相对变化验证小\(x\)近似；
9. 计算电离度与百分电离；
10. 解释浓度对电离度和pH的不同影响；
11. 推导同温度下共轭对\(K_aK_b=K_w\)；
12. 由\(K_a\)求共轭碱\(K_b\)，反之亦然；
13. 识别同离子、极稀溶液和高离子强度下的模型边界；
14. 区分热力学常数、浓度型条件常数和教材数值简写。

---

## 学习本课之前

- [8.2](./08-02-water-strong-acid-base.md)中的pH、\(K_w\)和电荷守恒；
- [7.6](../07-kinetics-equilibrium/07-06-equilibrium-composition-multiple.md)中的ICE表、
  小\(x\)近似和回代；
- [8.1](./08-01-models-structure-solvent.md)中的共轭酸碱对；
- 一元二次方程、平方根和对数。

### 3分钟诊断

1. 弱酸是否表示溶液浓度一定很低？
2. \(K_a\)越大，酸在同一溶剂和温度下一般越强还是越弱？
3. 做出\(C-x\approx C\)后，是否可以不检查\(x/C\)？
4. 弱酸稀释后百分电离增加，pH是否一定下降？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 不是；“弱”描述质子转移平衡，“稀”描述分析浓度；
2. 越强；
3. 不可以，近似必须验证；
4. 不一定；对普通弱酸，稀释使\([\ce{H3O+}]\)下降、pH上升，但电离百分比增加。

</details>

---

## 1. 弱酸是平衡概念

单质子酸：

\[
\ce{HA(aq)+H2O(l)<=>H3O+(aq)+A-(aq)}
\]

酸解离常数：

\[
\boxed{
K_a=
\frac{
a_{\ce{H3O+}}a_{\ce{A-}}
}{
a_{\ce{HA}}
}
}
\]

水为近似纯溶剂，活度已并入\(K_a\)。

若采用稀溶液浓度近似：

\[
K_a
\approx
\frac{
([\ce{H3O+}]/c^\circ)
([\ce{A-}]/c^\circ)
}{
[\ce{HA}]/c^\circ
}
\]

教材常省略标准浓度因子，写：

\[
K_a\approx
\frac{[\ce{H3O+}][\ce{A-}]}{[\ce{HA}]}
\]

后式是方便计算的浓度数值形式；严格热力学\(K_a\)仍无量纲。

---

## 2. \(K_a\)与\(\mathrm pK_a\)

\[
\boxed{
\mathrm pK_a=-\log_{10}K_a
}
\]

在相同温度、溶剂和标准态下：

- \(K_a\)越大，解离越有利，酸越强；
- \(\mathrm pK_a\)越小，酸越强。

不能把不同溶剂、不同温度或不同离子强度下的条件常数不加说明直接比较。

### 2.1 强弱不等于电离量固定

同一弱酸的实际电离分数还取决于：

- 分析浓度；
- 共轭碱是否已经存在；
- 其他酸碱平衡；
- 活度系数；
- 温度与溶剂。

\(K_a\)固定的是平衡活度比，不是“永远电离某个百分比”。

---

## 3. 单质子弱酸的ICE表

设弱酸分析浓度：

\[
C_a
\]

暂时假定：

- 无初始\(\ce{A-}\)；
- 水自偶电离贡献相对小；
- 浓度近似适用。

ICE表：

|  | \(\ce{HA}\) | \(\ce{H3O+}\) | \(\ce{A-}\) |
|---|---:|---:|---:|
| I | \(C_a\) | 0 | 0 |
| C | \(-x\) | \(+x\) | \(+x\) |
| E | \(C_a-x\) | \(x\) | \(x\) |

代入：

\[
\boxed{
K_a=\frac{x^2}{C_a-x}
}
\]

整理：

\[
x^2+K_ax-K_aC_a=0
\]

物理解：

\[
\boxed{
x=
\frac{
-K_a+\sqrt{K_a^2+4K_aC_a}
}{2}
}
\]

这里：

\[
x\approx[\ce{H3O+}]
\]

另一个根为负，应舍去。

---

## 4. 弱酸精确二次解示例

取25 °C代表性数据：

\[
K_a=1.80\times10^{-5}
\]

\[
C_a=0.100\ \mathrm{mol\,L^{-1}}
\]

\[
x=
\frac{
-1.80\times10^{-5}
+
\sqrt{(1.80\times10^{-5})^2+4(1.80\times10^{-5})(0.100)}
}{2}
\]

\[
x=1.33\times10^{-3}\ \mathrm{mol\,L^{-1}}
\]

\[
\boxed{
\mathrm{pH}\approx2.876
}
\]

电离百分比：

\[
\frac{x}{C_a}\times100\%
\approx1.33\%
\]

---

## 5. 小\(x\)近似怎样得到

若：

\[
x\ll C_a
\]

则：

\[
C_a-x\approx C_a
\]

所以：

\[
K_a\approx\frac{x^2}{C_a}
\]

\[
\boxed{
x\approx\sqrt{K_aC_a}
}
\]

于是：

\[
\boxed{
[\ce{H3O+}]
\approx\sqrt{K_aC_a}
}
\]

\[
\boxed{
\mathrm{pH}
\approx-\frac12
\left(
\log_{10}K_a+\log_{10}(C_a/c^\circ)
\right)
}
\]

也常写为：

\[
\mathrm{pH}
\approx\frac12
\left(
\mathrm pK_a-\log_{10}(C_a/c^\circ)
\right)
\]

### 5.1 回到前例

\[
x_\mathrm{approx}
=\sqrt{(1.80\times10^{-5})(0.100)}
=1.34\times10^{-3}
\]

与精确\(1.33\times10^{-3}\)接近。

---

## 6. 怎样验证近似

### 6.1 相对变化检查

\[
\frac{x}{C_a}\times100\%
\]

若小于约5%，基础课程常认为\(C_a-x\approx C_a\)可接受。但5%只是经验阈值。

### 6.2 回代检查

用近似解计算：

\[
Q_\mathrm{calc}
=\frac{x^2}{C_a-x}
\]

比较：

\[
\frac{|Q_\mathrm{calc}-K_a|}{K_a}
\]

是否满足所需精度。

### 6.3 数据精度检查

若\(K_a\)本身只有两位有效数字，追求十位小数的pH没有意义；若结论接近阈值，则不应
依赖5%口诀，应使用精确解。

### 即时检查1

\(K_a=1.0\times10^{-3}\)、\(C_a=0.010\ \mathrm M\)。用
\(\sqrt{K_aC_a}\)估算\(x/C_a\)，判断小\(x\)近似是否合适。

<details markdown="1">
<summary>答案</summary>

\[
x_\mathrm{approx}
=\sqrt{10^{-3}\times10^{-2}}
=3.16\times10^{-3}\ \mathrm M
\]

\[
\frac{x}{C_a}\times100\%
\approx31.6\%
\]

近似明显不合适，应解二次方程。

</details>

---

## 7. 电离度与百分电离

电离度：

\[
\boxed{
\alpha=\frac{\text{已电离弱酸浓度}}{\text{弱酸分析浓度}}
}
\]

在上述一比一模型中：

\[
\alpha=\frac{x}{C_a}
\]

百分电离：

\[
\boxed{
\%\text{电离}=100\alpha
}
\]

若小\(x\)近似成立：

\[
\alpha
\approx
\frac{\sqrt{K_aC_a}}{C_a}
=\sqrt{\frac{K_a}{C_a}}
\]

所以同一弱酸稀释时：

\[
C_a\downarrow
\quad\Rightarrow\quad
\alpha\uparrow
\]

---

## 8. 稀释：百分电离升高，酸度却下降

小\(x\)近似下：

\[
[\ce{H3O+}]
\approx\sqrt{K_aC_a}
\]

稀释使\(C_a\)降低，所以：

\[
[\ce{H3O+}]\downarrow
\]

同时：

\[
\alpha\approx\sqrt{\frac{K_a}{C_a}}
\]

所以：

\[
\alpha\uparrow
\]

两者不矛盾：

- 电离比例提高；
- 但每升溶液中的酸总量下降得更多；
- 因而氢离子绝对浓度仍下降，pH上升。

### 示例：稀释100倍

若近似区间内把\(C_a\)降为原来的\(1/100\)：

\[
[\ce{H3O+}]
\text{降为原来的 }1/10
\]

\[
\alpha
\text{增为原来的 }10\text{倍}
\]

---

## 9. 弱碱与\(K_b\)

对Brønsted碱\(\ce B\)：

\[
\ce{B(aq)+H2O(l)<=>BH+(aq)+OH-(aq)}
\]

\[
\boxed{
K_b=
\frac{
a_{\ce{BH+}}a_{\ce{OH-}}
}{
a_{\ce B}
}
}
\]

浓度近似、无初始产物且忽略水贡献：

\[
K_b=\frac{x^2}{C_b-x}
\]

精确浓度二次解：

\[
\boxed{
x=
\frac{
-K_b+\sqrt{K_b^2+4K_bC_b}
}{2}
}
\]

若\(x\ll C_b\)：

\[
\boxed{
[\ce{OH-}]
\approx\sqrt{K_bC_b}
}
\]

先求pOH，再用：

\[
\mathrm{pH}
=\mathrm pK_w-\mathrm{pOH}
\]

---

## 10. 弱碱示例

取25 °C代表性数据：

\[
K_b(\ce{NH3})=1.80\times10^{-5}
\]

\[
C_b=0.200\ \mathrm M
\]

近似：

\[
[\ce{OH-}]
\approx
\sqrt{(1.80\times10^{-5})(0.200)}
\]

\[
[\ce{OH-}]
\approx1.90\times10^{-3}\ \mathrm M
\]

\[
\mathrm{pOH}\approx2.722
\]

\[
\boxed{
\mathrm{pH}\approx11.278
}
\]

验证：

\[
\frac{1.90\times10^{-3}}{0.200}\times100\%
\approx0.95\%
\]

小\(x\)近似合理。

---

## 11. 共轭酸碱对的\(K_aK_b\)

对共轭对\(\ce{HA/A-}\)：

酸反应：

\[
\ce{HA+H2O<=>H3O+ + A-}
\]

\[
K_a=
\frac{
a_{\ce{H3O+}}a_{\ce{A-}}
}{
a_{\ce{HA}}
}
\]

共轭碱反应：

\[
\ce{A-+H2O<=>HA+OH-}
\]

\[
K_b=
\frac{
a_{\ce{HA}}a_{\ce{OH-}}
}{
a_{\ce{A-}}
}
\]

相乘并消去\(\ce{HA}\)与\(\ce{A-}\)活度：

\[
K_aK_b
=a_{\ce{H3O+}}a_{\ce{OH-}}
\]

\[
\boxed{
K_aK_b=K_w
}
\]

因此：

\[
\boxed{
\mathrm pK_a+\mathrm pK_b
=\mathrm pK_w
}
\]

该关系要求：

- 确为同一共轭酸碱对；
- 使用同一溶剂；
- 温度相同；
- 常数采用相容的标准态或条件。

25 °C时常近似：

\[
\mathrm pK_a+\mathrm pK_b=14.00
\]

---

## 12. 共轭强弱

由：

\[
K_b=\frac{K_w}{K_a}
\]

可知在同一水溶液条件下：

- 酸越强，\(K_a\)越大，其共轭碱\(K_b\)越小；
- 碱越强，其共轭酸越弱。

强酸的共轭碱通常是极弱碱；强碱的共轭酸通常是极弱酸。这是水中酸碱反应偏向
“较弱酸+较弱碱”一侧的定量基础。

### 即时检查2

25 °C时某酸\(K_a=2.0\times10^{-6}\)。求其共轭碱\(K_b\)。

<details markdown="1">
<summary>答案</summary>

\[
K_b
=\frac{1.0\times10^{-14}}{2.0\times10^{-6}}
=5.0\times10^{-9}
\]

</details>

---

## 13. 初始已有共轭物种

若弱酸溶液中初始已有\(\ce{A-}\)，ICE表应写：

|  | \(\ce{HA}\) | \(\ce{H3O+}\) | \(\ce{A-}\) |
|---|---:|---:|---:|
| I | \(C_{\ce{HA}}\) | \(h_0\) | \(C_{\ce{A-}}\) |
| C | \(-x\) | \(+x\) | \(+x\) |
| E | \(C_{\ce{HA}}-x\) | \(h_0+x\) | \(C_{\ce{A-}}+x\) |

不能再使用：

\[
K_a=\frac{x^2}{C_a-x}
\]

共轭碱会使解离受到抑制，即同离子效应。8.5将在缓冲体系中系统处理，并推导
Henderson–Hasselbalch关系。

---

## 14. 何时水自偶电离不能忽略

当弱酸很稀或极弱时，水本身的：

\[
[\ce{H3O+}]\sim10^{-7}\ \mathrm M
\]

可能与酸贡献相当。此时简单ICE初始行写\([\ce{H3O+}]=0\)不再合理。

对单质子弱酸的更完整浓度模型需同时满足：

物料守恒：

\[
C_a=[\ce{HA}]+[\ce{A-}]
\]

电荷守恒：

\[
[\ce{H3O+}]
=[\ce{A-}]+[\ce{OH-}]
\]

水平衡：

\[
K_w^c=[\ce{H3O+}][\ce{OH-}]
\]

酸平衡：

\[
K_a^c=
\frac{[\ce{H3O+}][\ce{A-}]}{[\ce{HA}]}
\]

联立后通常得到高次方程或数值问题。本章核心只要求识别何时需升级模型，不要求手推
通用三次式。

---

## 15. 活度与条件常数边界

真实溶液中：

\[
K_a=
\frac{
\gamma_{\ce{H+}}\gamma_{\ce{A-}}
}{
\gamma_{\ce{HA}}
}
\times
\text{相应浓度比}
\]

离子强度改变会改变活度系数，因此由裸浓度求得的“表观\(K_a\)”可能随介质变化。

应区分：

- 热力学\(K_a\)：活度定义、无量纲；
- 浓度型条件常数：在指定离子强度和介质下使用；
- 教材\(K_a\)数值：通常默认稀溶液近似。

不同数据表若标准态或温度不同，不应直接混用。

---

## 16. 弱酸与弱碱计算流程

1. 写质子转移反应；
2. 写严格活度\(K_a\)或\(K_b\)；
3. 声明浓度近似与温度；
4. 检查是否有初始共轭物种；
5. 检查水自偶电离能否忽略；
6. 建立ICE表或完整守恒；
7. 先得到精确代数式；
8. 若作小\(x\)近似，明确省略项；
9. 求pH或pOH；
10. 回代原式并检查\(x/C\)、电荷、物料和有效数字。

---

## 17. 常见误区

### 误区1：弱酸就是稀酸

强弱是平衡倾向，浓稀是分析浓度。

### 误区2：弱酸\([\ce{H3O+}]=C_a\)

弱酸只部分解离，必须由\(K_a\)求组成。

### 误区3：任何弱酸都可用\(\sqrt{K_aC_a}\)

还需无初始共轭碱、水贡献可忽略且\(x\ll C_a\)。

### 误区4：5%规则证明答案精确

它只是经验筛查，最终应回代。

### 误区5：稀释使电离增加，所以酸性增强

百分电离增加，但氢离子绝对浓度通常降低，pH升高。

### 误区6：\(K_aK_b=10^{-14}\)在所有温度成立

应写\(K_aK_b=K_w(T)\)；\(10^{-14}\)是25 °C近似。

### 误区7：共轭对常数可跨溶剂直接组合

必须是同一溶剂、温度和相容标准态。

---

## 18. 分层练习

### 基础层

1. 写出\(\ce{HA}\)的\(K_a\)和\(\ce{A-}\)的\(K_b\)表达式。
2. \(K_a=10^{-3}\)与\(10^{-6}\)的两种酸在相同条件下谁更强？
3. 写出无初始产物的弱酸ICE平衡浓度。
4. 定义电离度和百分电离。

### 应用层

5. \(K_a=1.00\times10^{-5}\)、\(C_a=0.100\ \mathrm M\)，用小\(x\)
   近似求pH并检查百分电离。
6. \(K_b=4.00\times10^{-6}\)、\(C_b=0.250\ \mathrm M\)，25 °C时求pH并
   检查近似。
7. 25 °C时某酸\(\mathrm pK_a=4.20\)，求其共轭碱\(\mathrm pK_b\)。
8. 某弱酸浓度由0.100 M稀释到0.00100 M，在小\(x\)区间内，氢离子浓度和
   电离度分别变为原来的多少倍？

### 综合层

9. \(K_a=1.0\times10^{-3}\)、\(C_a=0.0100\ \mathrm M\)，解二次方程求pH，
   并说明为何不能用小\(x\)近似。
10. 为什么含大量共轭碱的弱酸溶液不能使用\(x^2/(C_a-x)\)？
11. 列出极稀弱酸完整模型需要的四类方程。
12. 某数据表给出“\(K_a=1.8\times10^{-5}\ \mathrm{mol\,L^{-1}}\)”。怎样理解
    其传统单位与热力学无量纲常数的关系？

---

## 19. 完整答案

### 练习1

<details markdown="1">
<summary>完整答案</summary>

\[
K_a=
\frac{
a_{\ce{H3O+}}a_{\ce{A-}}
}{
a_{\ce{HA}}
}
\]

\[
K_b=
\frac{
a_{\ce{HA}}a_{\ce{OH-}}
}{
a_{\ce{A-}}
}
\]

</details>

### 练习2

<details markdown="1">
<summary>完整答案</summary>

\(K_a=10^{-3}\)的酸较强，因为在相同条件下质子转移平衡更偏向产物。

</details>

### 练习3

<details markdown="1">
<summary>完整答案</summary>

\[
[\ce{HA}]_\mathrm{eq}=C_a-x
\]

\[
[\ce{H3O+}]_\mathrm{eq}=x
\]

\[
[\ce{A-}]_\mathrm{eq}=x
\]

前提是初始产物与水贡献可忽略。

</details>

### 练习4

<details markdown="1">
<summary>完整答案</summary>

\[
\alpha=\frac{x}{C_a}
\]

\[
\%\text{电离}=100\alpha
\]

</details>

### 练习5

<details markdown="1">
<summary>完整答案</summary>

\[
x\approx\sqrt{(1.00\times10^{-5})(0.100)}
=1.00\times10^{-3}\ \mathrm M
\]

\[
\mathrm{pH}=3.000
\]

\[
\frac{x}{C_a}\times100\%=1.00\%
\]

近似合理。

</details>

### 练习6

<details markdown="1">
<summary>完整答案</summary>

\[
[\ce{OH-}]
\approx\sqrt{(4.00\times10^{-6})(0.250)}
=1.00\times10^{-3}\ \mathrm M
\]

\[
\mathrm{pOH}=3.000
\]

\[
\mathrm{pH}=11.000
\]

\[
\frac{x}{C_b}\times100\%=0.400\%
\]

近似合理。

</details>

### 练习7

<details markdown="1">
<summary>完整答案</summary>

25 °C：

\[
\mathrm pK_b
=\mathrm pK_w-\mathrm pK_a
=14.00-4.20
=9.80
\]

</details>

### 练习8

<details markdown="1">
<summary>完整答案</summary>

浓度降为原来的\(1/100\)：

\[
[\ce{H3O+}]\propto\sqrt{C_a}
\]

所以降为原来的\(1/10\)。

\[
\alpha\propto\frac1{\sqrt{C_a}}
\]

所以增为原来的10倍。

</details>

### 练习9

<details markdown="1">
<summary>完整答案</summary>

\[
x=
\frac{
-10^{-3}+\sqrt{10^{-6}+4.00\times10^{-5}}
}{2}
\]

\[
x=2.70\times10^{-3}\ \mathrm M
\]

\[
\boxed{\mathrm{pH}\approx2.568}
\]

\[
\frac{x}{C_a}\times100\%\approx27.0\%
\]

变化远不小，不能令\(C_a-x\approx C_a\)。

</details>

### 练习10

<details markdown="1">
<summary>完整答案</summary>

初始\([\ce{A-}]\ne0\)，平衡时分子应为
\([\ce{H3O+}]\times([\ce{A-}]_0+x)\)，而不是\(x^2\)。共轭碱还会使\(Q\)增大并抑制
正向解离。

</details>

### 练习11

<details markdown="1">
<summary>完整答案</summary>

至少包括：

1. 酸平衡\(K_a\)；
2. 水平衡\(K_w\)；
3. 酸组分物料守恒；
4. 电荷守恒。

真实溶液还可能需要活度系数模型。

</details>

### 练习12

<details markdown="1">
<summary>完整答案</summary>

传统浓度式省略了标准浓度\(c^\circ\)，因此常按量纲分析附上传统单位。严格热力学
\(K_a\)由活度比定义，无量纲。使用数据时需确认作者采用的浓度尺度、介质和标准态。

</details>

---

## 20. 本课小结

1. 弱酸弱碱是质子转移平衡概念，不等于低浓度。
2. \(K_a\)和\(K_b\)严格由无量纲活度定义。
3. 同条件下\(K_a\)越大、\(\mathrm pK_a\)越小，酸越强。
4. 无初始产物的单质子弱酸有
   \(K_a=x^2/(C_a-x)\)的浓度近似式。
5. 精确二次解为
   \(x=[-K_a+\sqrt{K_a^2+4K_aC_a}]/2\)。
6. 只有\(x\ll C_a\)时才有
   \([\ce{H3O+}]\approx\sqrt{K_aC_a}\)。
7. 小\(x\)近似必须用相对变化和原式回代验证。
8. 电离度\(\alpha=x/C_a\)，不是由\(K_a\)单独固定。
9. 稀释弱酸通常使百分电离升高，却使氢离子浓度下降。
10. 弱碱对应
    \([\ce{OH-}]\approx\sqrt{K_bC_b}\)的有条件近似。
11. 同温、同溶剂的共轭对满足\(K_aK_b=K_w\)。
12. 初始共轭物种会产生同离子效应，不能再用\(x^2/(C-x)\)。
13. 极稀弱酸需联立\(K_a,K_w\)、物料守恒和电荷守恒。
14. 高离子强度下应区分热力学常数与条件常数。

---

## 21. 下一课

本节只有一步质子转移。真实无机体系常有多步过程和盐离子水解：

> 多元酸的\(K_{a1},K_{a2},\ldots\)怎样控制主要物种？为什么盐的阳离子或阴离子
> 会与水反应？两性物种怎样判断，物种分布怎样随pH改变？

---

## 22. 术语与资料来源

本页酸解离常数、共轭关系和电离度依据IUPAC资料核对，访问日期为2026-07-24：

- [IUPAC Gold Book：acid dissociation constant](https://goldbook.iupac.org/terms/view/15441)
- [IUPAC Gold Book：conjugate acid–base pair](https://goldbook.iupac.org/terms/view/C01266)
- [IUPAC Gold Book：degree of ionization](https://goldbook.iupac.org/terms/view/D01568)
- [IUPAC关于活度与平衡常数的建议](https://publications.iupac.org/pac/1994/pdf/6603x0533.pdf)

进一步参考：

- Albert, Serjeant, *The Determination of Ionization Constants*.
- Peter Atkins, Julio de Paula, *Physical Chemistry*, acid–base equilibria.
