---
title: "8.5 缓冲溶液"
chapter: 8
unit: 8.5
status: draft-v0.1
estimated_study_time: "135–180分钟"
level: core
---

# 8.5 缓冲溶液

## 本课要解决的问题

弱酸和它的共轭碱为什么能减小加入少量强酸或强碱造成的pH变化？Henderson–
Hasselbalch方程怎样从\(K_a\)推导出来？为什么使用该式前仍要先做化学计量？缓冲
范围与缓冲容量有什么区别？稀释为什么常使理想缓冲pH近似不变，却降低抵抗外加酸碱
的能力？怎样选择共轭对并配制目标pH缓冲液？

本课建立：

\[
\boxed{
\mathrm{pH}
=\mathrm pK_a
+\log_{10}
\frac{a_{\ce{A-}}}{a_{\ce{HA}}}
}
\]

及稀溶液近似：

\[
\boxed{
\mathrm{pH}
\approx
\mathrm pK_a
+\log_{10}
\frac{[\ce{A-}]}{[\ce{HA}]}
}
\]

---

## 学习目标

完成本课后，你应该能够：

1. 识别弱酸—共轭碱与弱碱—共轭酸缓冲对；
2. 用两个方向的质子转移解释缓冲作用；
3. 从\(K_a\)活度式推导Henderson–Hasselbalch方程；
4. 说明浓度形式所需的活度近似；
5. 由共轭组分比计算缓冲pH；
6. 由目标pH求所需共轭组分比；
7. 用直接混合或部分中和配制缓冲液；
8. 加入少量强酸强碱时先做计量再求平衡；
9. 解释有效缓冲范围为何常取\(\mathrm pK_a\pm1\)；
10. 区分缓冲范围与缓冲容量；
11. 判断总浓度和组分比对容量的影响；
12. 解释理想稀释对pH和容量的不同影响；
13. 识别Henderson–Hasselbalch方程失效的情形；
14. 说明缓冲液只能减小pH变化，不能使pH绝对不变。

---

## 学习本课之前

- [8.3](./08-03-weak-acid-base-approximations.md)中的\(K_a,K_b\)和同离子效应；
- [8.4](./08-04-polyprotic-salt-hydrolysis-speciation.md)中的物种分布；
- [8.2](./08-02-water-strong-acid-base.md)中的强酸强碱计量；
- 对数、物质的量和稀释。

### 3分钟诊断

1. 只有弱酸、没有共轭碱的溶液是否是有效缓冲液？
2. 向\(\ce{HA/A-}\)缓冲液加入\(\ce{H+}\)，主要由哪一组分消耗？
3. 缓冲液被稀释10倍，理想浓度比是否改变？
4. 缓冲液能否吸收任意多强酸而保持pH不变？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 通常不是有效缓冲液，需要两种共轭形态都有可观数量；
2. \(\ce{A-}\)；
3. 不改变；
4. 不能，容量有限，且pH只是在一定添加范围内变化较小。

</details>

---

## 1. 缓冲液的组成

常见缓冲体系包含：

- 弱酸\(\ce{HA}\)与其共轭碱\(\ce{A-}\)；
- 弱碱\(\ce B\)与其共轭酸\(\ce{BH+}\)。

两种组分都应有可观数量。只有强酸与强碱不能构成传统共轭缓冲对，因为在水中它们的
质子转移几乎完全，缺少可逆储存与释放质子的弱共轭组分。

缓冲液可以：

- 由弱酸和其盐直接混合；
- 由弱碱和其盐直接混合；
- 用强碱部分中和弱酸；
- 用强酸部分中和弱碱。

---

## 2. 缓冲作用的两个方向

对：

\[
\ce{HA<=>H+ + A-}
\]

### 2.1 加少量强酸

\[
\ce{A- + H3O+ -> HA + H2O}
\]

共轭碱\(\ce{A-}\)消耗大部分外加\(\ce{H3O+}\)，转化为\(\ce{HA}\)。

### 2.2 加少量强碱

\[
\ce{HA + OH- -> A- + H2O}
\]

弱酸\(\ce{HA}\)消耗大部分外加\(\ce{OH-}\)，转化为\(\ce{A-}\)。

因此外加强酸或强碱主要改变的是共轭组分比，而不是直接把全部外加量留作游离
\(\ce{H3O+}\)或\(\ce{OH-}\)。

---

## 3. 推导Henderson–Hasselbalch方程

\[
K_a=
\frac{
a_{\ce{H+}}a_{\ce{A-}}
}{
a_{\ce{HA}}
}
\]

整理：

\[
a_{\ce{H+}}
=K_a\frac{a_{\ce{HA}}}{a_{\ce{A-}}}
\]

取负常用对数：

\[
-\log a_{\ce{H+}}
=-\log K_a
-\log\frac{a_{\ce{HA}}}{a_{\ce{A-}}}
\]

所以：

\[
\boxed{
\mathrm{pH}
=\mathrm pK_a
+\log
\frac{a_{\ce{A-}}}{a_{\ce{HA}}}
}
\]

这是活度形式，直接来自平衡定义，不需要先作小\(x\)近似。

---

## 4. 浓度形式的条件

写：

\[
a_i=\gamma_i\frac{c_i}{c^\circ}
\]

则：

\[
\frac{a_{\ce{A-}}}{a_{\ce{HA}}}
=
\frac{\gamma_{\ce{A-}}}{\gamma_{\ce{HA}}}
\frac{[\ce{A-}]}{[\ce{HA}]}
\]

只有在：

- 溶液足够稀；
- 活度系数比可近似1或已包含在条件常数中；
- 温度与\(K_a\)数据一致

时，才有常用浓度式：

\[
\boxed{
\mathrm{pH}
\approx\mathrm pK_a
+\log
\frac{[\ce{A-}]}{[\ce{HA}]}
}
\]

若两者在同一最终体积中：

\[
\frac{[\ce{A-}]}{[\ce{HA}]}
=\frac{n_{\ce{A-}}}{n_{\ce{HA}}}
\]

可直接用物质的量比。

---

## 5. 组分比与pH

### 5.1 等量

\[
a_{\ce{A-}}=a_{\ce{HA}}
\]

\[
\boxed{\mathrm{pH}=\mathrm pK_a}
\]

### 5.2 共轭碱多10倍

\[
\frac{a_{\ce{A-}}}{a_{\ce{HA}}}=10
\]

\[
\mathrm{pH}=\mathrm pK_a+1
\]

### 5.3 弱酸多10倍

\[
\frac{a_{\ce{A-}}}{a_{\ce{HA}}}=0.1
\]

\[
\mathrm{pH}=\mathrm pK_a-1
\]

这也是常用缓冲范围\(\mathrm pK_a\pm1\)的来源：范围内两种组分比约在0.1至10。

---

## 6. 基础计算示例

某缓冲液：

\[
[\ce{HA}]=0.100\ \mathrm M
\]

\[
[\ce{A-}]=0.150\ \mathrm M
\]

\[
\mathrm pK_a=4.76
\]

\[
\mathrm{pH}
=4.76+\log\frac{0.150}{0.100}
\]

\[
\boxed{
\mathrm{pH}=4.936
}
\]

### 即时检查1

同一共轭对中，若\([\ce{A-}]/[\ce{HA}]=0.250\)，求相对于
\(\mathrm pK_a\)的pH。

<details markdown="1">
<summary>答案</summary>

\[
\mathrm{pH}
=\mathrm pK_a+\log(0.250)
\]

\[
\boxed{
\mathrm{pH}
=\mathrm pK_a-0.602
}
\]

</details>

---

## 7. 设计目标pH

由：

\[
\mathrm{pH}
=\mathrm pK_a+\log\frac{a_{\ce{A-}}}{a_{\ce{HA}}}
\]

得到：

\[
\boxed{
\frac{a_{\ce{A-}}}{a_{\ce{HA}}}
=10^{\mathrm{pH}-\mathrm pK_a}
}
\]

设计步骤：

1. 选择\(\mathrm pK_a\)接近目标pH的共轭对；
2. 计算所需活度比或浓度近似比；
3. 选择足够总浓度以满足容量；
4. 考虑温度、离子强度、体积和化学相容性；
5. 实验中用校准pH测量并微调。

“\(\mathrm pK_a\)最接近”提高所需组分比的合理性，不自动保证缓冲液与样品、材料或
后续反应兼容。

---

## 8. 直接混合配制

要配制含：

\[
n(\ce{HA})=0.0100\ \mathrm{mol}
\]

\[
n(\ce{A-})=0.0200\ \mathrm{mol}
\]

的缓冲液，若\(\mathrm pK_a=4.76\)：

\[
\mathrm{pH}
\approx4.76+\log\frac{0.0200}{0.0100}
\]

\[
\boxed{\mathrm{pH}\approx5.061}
\]

若用盐提供\(\ce{A-}\)，应计入盐的化学计量、纯度和最终体积，但共同体积在比值中
约去。

---

## 9. 部分中和配制

初始：

\[
0.0100\ \mathrm{mol}\ \ce{HA}
\]

加入：

\[
0.00400\ \mathrm{mol}\ \ce{OH-}
\]

先反应：

\[
\ce{HA+OH- -> A-+H2O}
\]

反应后：

\[
n(\ce{HA})=0.00600\ \mathrm{mol}
\]

\[
n(\ce{A-})=0.00400\ \mathrm{mol}
\]

再平衡：

\[
\mathrm{pH}
=\mathrm pK_a+\log\frac{0.00400}{0.00600}
\]

\[
\boxed{
\mathrm{pH}
=\mathrm pK_a-0.176
}
\]

若强碱达到或超过弱酸的全部物质的量，\(\ce{HA}\)耗尽，不再是这对组分的缓冲区。

---

## 10. 加强酸：先计量

某缓冲液原有：

\[
n(\ce{HA})=0.0100\ \mathrm{mol}
\]

\[
n(\ce{A-})=0.0100\ \mathrm{mol}
\]

\[
\mathrm pK_a=4.76
\]

加入：

\[
0.00100\ \mathrm{mol}\ \ce{HCl}
\]

强酸先与\(\ce{A-}\)反应：

\[
\ce{A-+H3O+ -> HA+H2O}
\]

反应后：

\[
n(\ce{A-})=0.00900
\]

\[
n(\ce{HA})=0.0110
\]

\[
\mathrm{pH}
\approx4.76+\log\frac{0.00900}{0.0110}
\]

\[
\boxed{
\mathrm{pH}\approx4.673
}
\]

原pH为4.760，加入强酸后下降但变化较小。

---

## 11. 加强碱：同样先计量

若向同样初始等量缓冲液加入
\(0.00100\ \mathrm{mol}\ \ce{NaOH}\)：

\[
\ce{HA+OH- -> A-+H2O}
\]

\[
n(\ce{HA})=0.00900
\]

\[
n(\ce{A-})=0.0110
\]

\[
\mathrm{pH}
\approx4.76+\log\frac{0.0110}{0.00900}
\]

\[
\boxed{
\mathrm{pH}\approx4.847
}
\]

直接把外加\(\ce{OH-}\)除以总体积求pOH是错误的，因为它先被弱酸计量消耗。

---

## 12. 为什么不能“直接把强酸浓度代入平衡式”

强酸与缓冲组分的质子转移平衡常数通常很大，首先发生近似定量的化学计量反应。完成后
剩余的\(\ce{HA/A-}\)再建立弱酸平衡。

所以必须分两层：

```text
第一层：强反应计量
第二层：弱平衡调整
```

这与强酸强碱滴定的分段思路相同。

---

## 13. 缓冲范围

当：

\[
0.1\le
\frac{a_{\ce{A-}}}{a_{\ce{HA}}}
\le10
\]

有：

\[
\mathrm pK_a-1
\lesssim\mathrm{pH}
\lesssim\mathrm pK_a+1
\]

这常称有效缓冲范围。它是实用经验：

- 不是体系在范围外突然完全失去作用；
- 不是所有用途都接受同样pH变化；
- 不包含总浓度信息，因此不能表达容量。

---

## 14. 缓冲容量

缓冲容量可用加入单位体积溶液、使pH改变一个单位所需强酸或强碱的量来描述。微分形式
常写：

\[
\beta
=
\frac{1}{V}
\frac{\mathrm dn_\mathrm{strong\ base}}
{\mathrm d(\mathrm{pH})}
\]

符号约定可随定义调整，本课关注大小。

一般趋势：

- 共轭对总浓度越高，容量越大；
- 在相同总浓度下，\(\ce{HA}\)与\(\ce{A-}\)接近等量时综合容量通常最大；
- 抵抗加酸主要依赖\(\ce{A-}\)储量；
- 抵抗加碱主要依赖\(\ce{HA}\)储量；
- 极端组分比使一侧容量很小。

缓冲范围回答“pH离\(\mathrm pK_a\)多远”，容量回答“能承受多少外加酸碱”。

---

## 15. 稀释：pH近似不变，容量下降

若理想稀释使：

\[
[\ce{HA}]\rightarrow\frac{[\ce{HA}]}{f}
\]

\[
[\ce{A-}]\rightarrow\frac{[\ce{A-}]}{f}
\]

则比值不变：

\[
\frac{[\ce{A-}]/f}{[\ce{HA}]/f}
=\frac{[\ce{A-}]}{[\ce{HA}]}
\]

所以Henderson–Hasselbalch近似给出相同pH。

但单位体积内两组分物质的量减少，缓冲容量下降。高度稀释时还会出现：

- 水自偶电离不可忽略；
- 活度系数改变；
- 稀释体积非理想；
- 污染或\(\ce{CO2}\)吸收影响增大。

因此“稀释不改变缓冲pH”只是有限近似。

---

## 16. 弱碱缓冲液

对：

\[
\ce{B+H2O<=>BH+ + OH-}
\]

\[
\mathrm{pOH}
\approx
\mathrm pK_b
+\log
\frac{[\ce{BH+}]}{[\ce B]}
\]

也可把\(\ce{BH+}\)视作酸：

\[
\boxed{
\mathrm{pH}
\approx
\mathrm pK_a(\ce{BH+})
+\log
\frac{[\ce B]}{[\ce{BH+}]}
}
\]

两式在同温度且满足：

\[
\mathrm pK_a+\mathrm pK_b=\mathrm pK_w
\]

时一致。

---

## 17. 多元酸缓冲区

多元酸的每对相邻形态都可形成一个缓冲区。例如磷酸体系：

- \(\ce{H3PO4/H2PO4-}\)围绕\(\mathrm pK_{a1}\)；
- \(\ce{H2PO4-/HPO4^2-}\)围绕\(\mathrm pK_{a2}\)；
- \(\ce{HPO4^2-/PO4^3-}\)围绕\(\mathrm pK_{a3}\)。

必须选择与目标pH相邻的那一对。若两个\(\mathrm pK_a\)相隔不大，多种形态同时显著，
单一Henderson–Hasselbalch式可能不足。

---

## 18. Henderson–Hasselbalch式何时失效

以下情形应回到完整平衡和守恒：

- 一种缓冲组分几乎耗尽；
- 外加强酸或强碱超过缓冲库存；
- 溶液极稀，水自偶电离重要；
- 离子强度高，活度系数不能约去；
- 多元酸相邻平衡重叠；
- 发生沉淀、络合、氧化还原或挥发；
- pH远离所选\(\mathrm pK_a\)；
- 温度与所用\(\mathrm pK_a\)不一致。

该方程不是“所有酸碱题的pH公式”。

---

## 19. 缓冲液不意味着安全或静止

缓冲液：

- 仍含酸和碱组分；
- 仍可具有腐蚀性、毒性或反应性；
- pH会随加料、温度和稀释改变；
- 可能与样品或容器反应；
- 容量耗尽后pH可迅速变化。

“缓冲”只表示对某类小扰动的pH响应较小。

---

## 20. 一套可靠的缓冲计算流程

1. 识别真正的共轭酸碱对；
2. 写\(K_a\)活度式；
3. 判断是否存在强酸强碱反应；
4. 若有，先做物质的量计量；
5. 检查两种缓冲组分均剩余；
6. 再用活度比或浓度近似式；
7. 检查组分比是否在实用范围；
8. 检查总浓度能否提供所需容量；
9. 检查稀释、温度、离子强度和副反应；
10. 必要时回到完整平衡与守恒；
11. 报告pH变化而非声称“完全不变”；
12. 实验配制应校准测量并按目标温度调整。

---

## 21. 常见误区

### 误区1：弱酸溶液本身就是缓冲液

若共轭碱量很少，抵抗加酸能力很弱。

### 误区2：Henderson–Hasselbalch式无需条件

它的浓度形式依赖活度近似和两组分均有可观量。

### 误区3：加HCl后直接把HCl浓度放进\(K_a\)

先由\(\ce{A-}\)计量消耗强酸，再求新平衡。

### 误区4：pH在\(\mathrm pK_a\pm1\)内就一定容量很大

范围只给组分比；容量还取决于总浓度。

### 误区5：稀释不影响缓冲液

理想比值pH近似不变，但容量下降，极稀时近似失效。

### 误区6：缓冲液pH完全不变

缓冲只减小变化，不能消除变化。

---

## 22. 分层练习

### 基础层

1. 哪两类共轭组合可形成常见缓冲液？
2. 从\(K_a\)写出Henderson–Hasselbalch活度式。
3. \([\ce{A-}]=[\ce{HA}]\)时pH是多少？
4. 为什么缓冲范围不等于缓冲容量？

### 应用层

5. \(\mathrm pK_a=4.50\)，
   \([\ce{A-}]/[\ce{HA}]=3.00\)，求pH。
6. 目标pH 7.40，所选酸\(\mathrm pK_a=7.20\)，求所需
   \(a_{\ce{A-}}/a_{\ce{HA}}\)。
7. 含0.0200 mol \(\ce{HA}\)和0.0300 mol \(\ce{A-}\)的缓冲液，
   \(\mathrm pK_a=5.00\)。加入0.00500 mol HCl后求近似pH。
8. 同一初始缓冲液加入0.00500 mol NaOH后求近似pH。

### 综合层

9. 用0.100 mol弱酸和0.0400 mol NaOH部分中和配制缓冲液，
   \(\mathrm pK_a=4.76\)。求反应后组分和pH。
10. 两杯缓冲液组分比相同，一杯总浓度0.010 M，另一杯1.00 M。理想pH和容量怎样
    比较？
11. 为什么当外加强酸物质的量超过初始\(\ce{A-}\)时，不能继续直接用缓冲公式？
12. 多元酸体系中怎样选择用于目标pH的相邻共轭对？

---

## 23. 完整答案

### 练习1

<details markdown="1">
<summary>完整答案</summary>

弱酸与其共轭碱，或弱碱与其共轭酸。两种组分都需有可观数量。

</details>

### 练习2

<details markdown="1">
<summary>完整答案</summary>

\[
\mathrm{pH}
=\mathrm pK_a
+\log
\frac{a_{\ce{A-}}}{a_{\ce{HA}}}
\]

</details>

### 练习3

<details markdown="1">
<summary>完整答案</summary>

\[
\mathrm{pH}=\mathrm pK_a
\]

</details>

### 练习4

<details markdown="1">
<summary>完整答案</summary>

缓冲范围主要由共轭组分比决定；缓冲容量还取决于单位体积内两组分总量。低浓度缓冲液
即使比值合适，也只能承受少量外加酸碱。

</details>

### 练习5

<details markdown="1">
<summary>完整答案</summary>

\[
\mathrm{pH}
=4.50+\log3.00
=4.977
\]

</details>

### 练习6

<details markdown="1">
<summary>完整答案</summary>

\[
\frac{a_{\ce{A-}}}{a_{\ce{HA}}}
=10^{7.40-7.20}
=10^{0.20}
\]

\[
\boxed{
\frac{a_{\ce{A-}}}{a_{\ce{HA}}}
\approx1.58
}
\]

</details>

### 练习7

<details markdown="1">
<summary>完整答案</summary>

强酸消耗\(\ce{A-}\)：

\[
n(\ce{A-})=0.0300-0.00500=0.0250
\]

\[
n(\ce{HA})=0.0200+0.00500=0.0250
\]

\[
\boxed{\mathrm{pH}\approx5.00}
\]

</details>

### 练习8

<details markdown="1">
<summary>完整答案</summary>

强碱消耗\(\ce{HA}\)：

\[
n(\ce{HA})=0.0200-0.00500=0.0150
\]

\[
n(\ce{A-})=0.0300+0.00500=0.0350
\]

\[
\mathrm{pH}
=5.00+\log\frac{0.0350}{0.0150}
\]

\[
\boxed{\mathrm{pH}\approx5.368}
\]

</details>

### 练习9

<details markdown="1">
<summary>完整答案</summary>

\[
\ce{HA+OH- -> A-+H2O}
\]

反应后：

\[
n(\ce{HA})=0.100-0.0400=0.0600
\]

\[
n(\ce{A-})=0.0400
\]

\[
\mathrm{pH}
=4.76+\log\frac{0.0400}{0.0600}
\]

\[
\boxed{\mathrm{pH}\approx4.584}
\]

</details>

### 练习10

<details markdown="1">
<summary>完整答案</summary>

在理想浓度比近似下两杯pH相同。1.00 M缓冲液每单位体积含更多两种组分，容量大得多；
但高浓度下活度非理想性也更显著，实际pH未必完全相同。

</details>

### 练习11

<details markdown="1">
<summary>完整答案</summary>

初始\(\ce{A-}\)被耗尽后，溶液中出现剩余强酸，已不再同时含有足量\(\ce{HA/A-}\)
缓冲对。应按剩余强酸和可能的弱酸平衡重新分段求解。

</details>

### 练习12

<details markdown="1">
<summary>完整答案</summary>

选择其\(\mathrm pK_a\)最接近目标pH的相邻质子化形态，并检查其他相邻平衡是否可
忽略、两种形态是否均有足量，以及是否存在活度或副反应问题。

</details>

---

## 24. 本课小结

1. 缓冲液通常含弱酸—共轭碱或弱碱—共轭酸两种可观组分。
2. 共轭碱消耗外加强酸，弱酸消耗外加强碱。
3. Henderson–Hasselbalch活度式直接由\(K_a\)推导。
4. 浓度比形式依赖稀溶液和活度系数近似。
5. 共轭组分等活度时\(\mathrm{pH}=\mathrm pK_a\)。
6. 目标比为\(10^{\mathrm{pH}-\mathrm pK_a}\)。
7. 缓冲液可直接混合共轭组分或部分中和制备。
8. 加强酸强碱必须先做计量，再用弱平衡式。
9. 常用有效范围约为\(\mathrm pK_a\pm1\)，对应组分比0.1至10。
10. 缓冲范围描述组分比，缓冲容量描述可承受的酸碱量。
11. 总浓度越高通常容量越大，等量附近综合容量较大。
12. 理想稀释时pH近似不变，但容量降低。
13. 多元酸每对相邻形态对应不同缓冲区。
14. 组分耗尽、极稀、高离子强度或副反应出现时应回到完整平衡。

---

## 25. 下一课

缓冲计算已经展示了“强反应计量→弱平衡”的分段方法。下一课把强碱连续加入酸中：

> 滴定开始、缓冲区、半当量点、当量点和过量滴定剂区分别由什么控制pH？为什么弱酸
> 滴定的当量点不在pH 7？怎样依据突跃区选择指示剂，而不是背固定颜色表？

---

## 26. 术语与资料来源

本页pH、酸解离常数和Henderson–Hasselbalch关系依据IUPAC资料核对，访问日期为
2026-07-24：

- [IUPAC Gold Book：Henderson–Hasselbalch equation](https://goldbook.iupac.org/terms/view/H02781)
- [IUPAC Gold Book：acid dissociation constant](https://goldbook.iupac.org/terms/view/15441)
- [IUPAC Gold Book：pH](https://goldbook.iupac.org/terms/view/P04524)
- [IUPAC Recommendations：pH定义、标准与缓冲测量](https://publications.iupac.org/publications/pac/2002/pdf/7411x2169.pdf)

进一步参考：

- Roger G. Bates, *Determination of pH: Theory and Practice*.
- Daniel C. Harris, *Quantitative Chemical Analysis*, buffer calculations.
