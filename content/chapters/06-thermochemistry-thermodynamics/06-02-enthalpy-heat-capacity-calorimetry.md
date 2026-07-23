---
title: "6.2 焓、热容与量热"
chapter: 6
unit: 6.2
status: draft-v0.1
estimated_study_time: "120–165分钟"
level: core
---

# 6.2 焓、热容与量热

## 本课要解决的问题

为什么许多定压化学实验把测得的热与焓变联系？焓是“物质所含的热”吗？热容、比热容
和摩尔热容有什么区别？咖啡杯量热与量热弹分别接近测量\(\Delta H\)还是\(\Delta U\)？
反应使溶液升温时，为什么反应本身的热量取负号？相变过程中温度不变是否表示没有能量
传递？

本课的核心关系为：

\[
H=U+pV
\]

在封闭系统、恒压且只有压力—体积功时：

\[
\boxed{q_p=\Delta H}
\]

这是一条有条件的关系，不是“热与焓永远相等”。

---

## 学习目标

完成本课后，你应该能够：

1. 定义焓并说明它是状态函数；
2. 由第一定律推导恒压下\(q_p=\Delta H\)的条件；
3. 区分定容热\(q_V\)与定压热\(q_p\)；
4. 区分温度、热、内能和焓；
5. 区分热容、比热容和摩尔热容；
6. 使用\(q=C\Delta T\)、\(q=mc\Delta T\)和\(q=nC_\mathrm m\Delta T\)；
7. 说明\(C_p\)和\(C_V\)的物理差异；
8. 建立量热器的系统—环境能量守恒；
9. 处理量热器常数与溶液热容；
10. 由温度变化求反应摩尔焓；
11. 区分咖啡杯量热和量热弹；
12. 处理热量损失、热容近似和相变的边界；
13. 按化学方程式计量解释反应焓；
14. 检查符号、单位和有效数字。

---

## 学习本课之前

- [6.1](./06-01-system-state-heat-work-internal-energy.md)中的
  \(\Delta U=q+w\)和功符号；
- \(w=-p_\mathrm{ext}\Delta V\)；
- 第1章的摩尔、限量试剂和化学方程式；
- \(\Delta T=T_\mathrm f-T_\mathrm i\)。

### 3分钟诊断

1. 溶液温度升高时，溶液的\(q\)通常为正还是负？
2. 若反应是溶液升温的唯一能量来源，反应的\(q\)与溶液的\(q\)符号如何？
3. \(1^\circ\mathrm C\)的温差与\(1\ \mathrm K\)的温差数值是否相同？
4. “物质的比热容为\(4.18\ \mathrm{J\,g^{-1}\,K^{-1}}\)”是否已给出整份样品热容？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 溶液吸收能量，\(q_\mathrm{solution}>0\)；
2. 二者互为相反数；
3. 相同；
4. 没有，还需乘样品质量。

</details>

---

## 1. 为什么引入焓

许多化学反应在敞口容器中、近似恒定大气压下进行。若反应产生气体并膨胀，系统可能
一边改变内能，一边对环境做压力—体积功。

只看\(\Delta U\)不能直接等于定压交换的热。为把\(pV\)项与内能合并，定义：

\[
\boxed{H=U+pV}
\]

焓\(H\)是状态函数，因为\(U,p,V\)都是状态量。

### 1.1 焓不是“热含量”

历史上有时把焓称为heat content，但现代热力学中应避免把它想成储存在物质里的“热”：

- 系统具有焓；
- 热\(q\)是跨边界的过程量；
- 只有在特定约束下，过程热才等于焓变。

---

## 2. 推导恒压热与焓变

由定义：

\[
\Delta H=\Delta U+\Delta(pV)
\]

若初、终态压力相同且过程恒压：

\[
\Delta(pV)=p\Delta V
\]

若系统只做压力—体积功：

\[
w=-p_\mathrm{ext}\Delta V
\]

准静态或恒定边界压力与系统压力相容时，由第一定律：

\[
\Delta U=q_p-p\Delta V
\]

所以：

\[
\Delta H
=
\Delta U+p\Delta V
=
q_p
\]

即：

\[
\boxed{q_p=\Delta H}
\]

### 2.1 条件清单

这条等式要求：

- 系统封闭；
- 过程恒压；
- 只有压力—体积功，或已将其他功项单独处理；
- 初、终态明确。

若有显著电功、表面功或非恒压过程，不能机械套用。

### 即时检查1

某恒压反应放出\(85\ \mathrm{kJ}\)热，只有\(pV\)功。求\(\Delta H\)。

<details markdown="1">
<summary>答案</summary>

以反应体系为系统，放热\(q_p=-85\ \mathrm{kJ}\)，因此
\(\Delta H=-85\ \mathrm{kJ}\)。

</details>

---

## 3. 定容热

刚性容器中：

\[
\Delta V=0
\]

若只有压力—体积功：

\[
w=0
\]

由第一定律：

\[
\boxed{q_V=\Delta U}
\]

因此：

- 恒容量热弹近似给出反应内能变；
- 恒压溶液量热近似给出反应焓变；
- 两者一般不应无条件视为相同。

### 3.1 理想气体反应的联系

在同一温度、理想气体近似下：

\[
\Delta H=\Delta U+\Delta n_\mathrm gRT
\]

\(\Delta n_\mathrm g\)是按所写反应式“气态产物物质的量减气态反应物物质的量”。固体和
液体不计入这一理想气体项。

该式将在6.3热化学计算中继续使用；真实气体和显著温度变化需更完整处理。

---

## 4. 温度、热和状态函数

温度变化可以提示能量转移，却不是热量本身。

同样的\(10\ \mathrm K\)升温：

- 1 g水所需能量与1 kg水不同；
- 水与铜所需能量不同；
- 有相变或反应时不能只按单一热容计算；
- 容器也可能吸收能量。

因此量热必须同时知道物质的量或质量、热容和过程。

---

## 5. 热容、比热容和摩尔热容

### 5.1 热容

一份具体系统的热容：

\[
C=\frac{\delta q}{\mathrm dT}
\]

有限温区内若\(C\)近似恒定：

\[
\boxed{q=C\Delta T}
\]

单位：

\[
\mathrm{J\,K^{-1}}
\]

\(C\)是广度量；样品加倍，热容通常加倍。

### 5.2 比热容

比热容是单位质量的热容：

\[
c=\frac Cm
\]

\[
\boxed{q=mc\Delta T}
\]

常用单位：

\[
\mathrm{J\,g^{-1}\,K^{-1}}
\]

“specific heat”在口语中常见，更规范名称为specific heat capacity。

### 5.3 摩尔热容

摩尔热容是单位物质的量的热容：

\[
C_\mathrm m=\frac Cn
\]

\[
\boxed{q=nC_\mathrm m\Delta T}
\]

单位：

\[
\mathrm{J\,mol^{-1}\,K^{-1}}
\]

必须注明物质、相态和恒压/恒容条件。

---

## 6. \(C_p\)与\(C_V\)

IUPAC给出的状态函数导数为：

\[
C_V=\left(\frac{\partial U}{\partial T}\right)_V
\]

\[
C_p=\left(\frac{\partial H}{\partial T}\right)_p
\]

对气体，恒压加热常伴随膨胀并对外做功，所以达到相同温升通常需要输入更多热：

\[
C_p>C_V
\]

对理想气体：

\[
C_{p,\mathrm m}-C_{V,\mathrm m}=R
\]

凝聚相的体积变化较小，\(C_p\)与\(C_V\)常较接近，但高精度下仍不应自动视为相等。

---

## 7. 热容会随温度和相态变化

\(q=mc\Delta T\)默认所用\(c\)在该温区近似恒定。更一般地：

\[
q=\int_{T_i}^{T_f}C(T)\,\mathrm dT
\]

跨越相变时应分段：

\[
q
=
\int C_{\text{相1}}\,\mathrm dT
+n\Delta H_\mathrm{trans}
+\int C_{\text{相2}}\,\mathrm dT
\]

相变平台温度近似不变并不表示\(q=0\)；输入能量用于改变粒子排列和相互作用，而非
提高温度。

---

## 8. 量热法的核心：选边界并守恒能量

理想绝热量热装置中：

\[
q_\mathrm{universe}=0
\]

若把反应视为系统，把溶液和量热器视为环境：

\[
\boxed{
q_\mathrm{rxn}
+q_\mathrm{solution}
+q_\mathrm{cal}
=0
}
\]

因此：

\[
q_\mathrm{rxn}
=
-\left(q_\mathrm{solution}+q_\mathrm{cal}\right)
\]

量热题最常见的错误就是漏掉这个负号。

---

## 9. 咖啡杯量热

泡沫杯等开放量热器近似恒压。若反应在溶液中进行且只有\(pV\)功：

\[
q_{\mathrm{rxn},p}\approx\Delta H_\mathrm{rxn}
\]

溶液吸热：

\[
q_\mathrm{solution}
=
m_\mathrm{solution}c_\mathrm{solution}\Delta T
\]

量热器本体吸热：

\[
q_\mathrm{cal}=C_\mathrm{cal}\Delta T
\]

所以：

\[
\boxed{
q_\mathrm{rxn}
=
-\left(m_\mathrm{solution}c_\mathrm{solution}+C_\mathrm{cal}\right)\Delta T
}
\]

### 9.1 常见近似

基础题常假设：

- 溶液密度为\(1.00\ \mathrm{g\,mL^{-1}}\)；
- 稀溶液比热容近似水的\(4.184\ \mathrm{J\,g^{-1}\,K^{-1}}\)；
- 反应物体积可加；
- 无热损失和蒸发；
- 量热器热容忽略或已给出。

这些都不是普适事实，题目未授权时不应自行使用。

---

## 10. 咖啡杯量热示例

\(0.0100\ \mathrm{mol}\)反应在\(100.0\ \mathrm g\)溶液中发生，溶液比热容取
\(4.18\ \mathrm{J\,g^{-1}\,K^{-1}}\)，量热器常数
\(C_\mathrm{cal}=35\ \mathrm{J\,K^{-1}}\)，温度升高\(5.20\ \mathrm K\)。

环境吸热：

\[
q_\mathrm{solution}
=(100.0)(4.18)(5.20)
=2174\ \mathrm J
\]

\[
q_\mathrm{cal}
=(35)(5.20)
=182\ \mathrm J
\]

\[
q_\mathrm{surr}=2356\ \mathrm J
\]

反应放热：

\[
q_\mathrm{rxn}=-2356\ \mathrm J
\]

按每摩尔反应：

\[
\Delta_\mathrm rH
\approx
\frac{-2.356\ \mathrm{kJ}}{0.0100\ \mathrm{mol}}
=-236\ \mathrm{kJ\,mol^{-1}}
\]

这里“每摩尔”指按所写反应进度发生1 mol；必须与平衡方程式的计量相对应。

---

## 11. 热平衡量热

把热物体投入冷水，若装置绝热且无相变：

\[
q_\mathrm{hot}+q_\mathrm{cold}+q_\mathrm{cal}=0
\]

每部分都使用自己的：

\[
q_i=m_ic_i(T_f-T_{i})
\]

最终温度\(T_f\)相同，但每一项的\(\Delta T\)不同；热物体的\(\Delta T<0\)，冷物体
的\(\Delta T>0\)，符号会自动反映放热和吸热。

### 示例：求金属比热容

\(25.0\ \mathrm g\)金属从\(95.0^\circ\mathrm C\)投入
\(100.0\ \mathrm g\)、\(20.0^\circ\mathrm C\)的水，最终
\(21.8^\circ\mathrm C\)。忽略量热器和热损失。

水吸热：

\[
q_\mathrm w
=(100.0)(4.184)(21.8-20.0)
=753\ \mathrm J
\]

金属放热：

\[
q_\mathrm m
=(25.0)c_\mathrm m(21.8-95.0)
\]

由\(q_\mathrm m+q_\mathrm w=0\)：

\[
c_\mathrm m
=
\frac{753}{(25.0)(73.2)}
=0.411\ \mathrm{J\,g^{-1}\,K^{-1}}
\]

---

## 12. 量热弹

量热弹是刚性密闭容器，常用于燃烧反应。近似恒容：

\[
q_V=\Delta U
\]

若已校准整个量热器有效热容\(C_\mathrm{cal}\)：

\[
q_\mathrm{cal}=C_\mathrm{cal}\Delta T
\]

\[
q_\mathrm{rxn}=-q_\mathrm{cal}
\]

### 示例

量热器常数\(8.50\ \mathrm{kJ\,K^{-1}}\)，燃烧样品后温升
\(2.40\ \mathrm K\)：

\[
q_\mathrm{cal}=(8.50)(2.40)=20.4\ \mathrm{kJ}
\]

\[
\Delta U_\mathrm{sample}=q_V=-20.4\ \mathrm{kJ}
\]

若样品为\(0.750\ \mathrm g\)、摩尔质量\(60.0\ \mathrm{g\,mol^{-1}}\)，则

\[
n=0.0125\ \mathrm{mol}
\]

\[
\Delta_\mathrm cU
=
\frac{-20.4}{0.0125}
=-1.63\times10^3\ \mathrm{kJ\,mol^{-1}}
\]

若需要燃烧焓，还需依据气体物质的量变化把\(\Delta U\)转换为\(\Delta H\)。

---

## 13. 量热器常数怎样得到

实际量热器会吸热，且结构复杂，未必能逐件准确相加热容。可用已知能量输入校准：

- 电加热输入已知电能；
- 燃烧已知标准物质；
- 使用已知相变或反应焓的标准过程。

若输入已知\(q_\mathrm{known}\)产生温升\(\Delta T\)：

\[
C_\mathrm{cal}
=
\frac{q_\mathrm{known}}{\Delta T}
\]

校准条件应尽量接近实际实验条件；不同装液量、附件和温区可能改变有效热容。

---

## 14. 反应焓与化学计量

反应焓依赖所写方程式。例如：

\[
\ce{H2(g) + 1/2 O2(g) -> H2O(l)}
\qquad \Delta_\mathrm rH=x
\]

若整个反应式乘2：

\[
\ce{2H2(g) + O2(g) -> 2H2O(l)}
\qquad \Delta_\mathrm rH=2x
\]

若反向：

\[
\ce{H2O(l) -> H2(g) + 1/2 O2(g)}
\qquad \Delta_\mathrm rH=-x
\]

因此必须：

- 写平衡方程式；
- 写物态；
- 说明按多少反应进度；
- 不把\(\mathrm{kJ}\)和\(\mathrm{kJ\,mol^{-1}}\)混用。

---

## 15. 不确定性与实验边界

实际量热常受：

- 与外界换热；
- 温度计响应滞后；
- 混合不完全；
- 蒸发；
- 反应不完全或副反应；
- 溶液真实热容和密度；
- 量热器校准；
- 温度随时间漂移影响。

“温度最高点减初温”只是基础处理。精密量热需对热漏、基线和校准不确定度作修正。

---

## 16. 常见误区

1. **焓就是物质所含的热**：焓是状态函数，热是过程量。
2. **恒压就必有\(q=\Delta H\)**：还需只有\(pV\)功等条件。
3. **温升为正，所以反应\(q\)为正**：若反应使环境升温，反应本身放热为负。
4. **\(C,c,C_m\)单位相同**：分别为每系统、每质量、每摩尔。
5. **任何温区都可用常数\(c\)**：热容随温度和相态变化。
6. **相变平台没有吸热**：能量用于改变相和粒子排列。
7. **量热杯本身不吸热**：除非题目允许忽略或已含在有效热容中。
8. **量热弹直接给\(\Delta H\)**：恒容下首先得到\(\Delta U\)。
9. **把反应物质量而非溶液总质量代入**：必须看所建热容模型覆盖哪些物质。
10. **反应式倍乘但焓不变**：反应焓是随反应进度缩放的广度变化。

---

## 17. 本课练习

1. 由\(H=U+pV\)和第一定律推导恒压、仅\(pV\)功时\(q_p=\Delta H\)。
2. 区分热容、比热容和摩尔热容的单位。
3. \(50.0\ \mathrm g\)水升温\(7.50\ \mathrm K\)，求吸热量。
4. 一物体热容为\(125\ \mathrm{J\,K^{-1}}\)，降温\(8.0\ \mathrm K\)，求\(q\)。
5. 为什么气体通常有\(C_p>C_V\)？
6. \(0.0200\ \mathrm{mol}\)反应使\(150.0\ \mathrm g\)溶液升温
   \(3.00\ \mathrm K\)。取\(c=4.18\ \mathrm{J\,g^{-1}\,K^{-1}}\)，忽略量热器，
   求摩尔反应焓。
7. 若上一题量热器常数为\(45\ \mathrm{J\,K^{-1}}\)，答案怎样修正？
8. 量热弹有效热容\(10.0\ \mathrm{kJ\,K^{-1}}\)，温升\(1.85\ \mathrm K\)，求样品
   的\(\Delta U\)。
9. 写出加热冰到水蒸气所需的分段能量项，不需代数值。
10. 判断：“温度不变的过程没有热传递；温度升高的系统必定吸热。”
11. 为什么量热计算必须注明反应方程式与物态？
12. 某理想气体反应在298 K有\(\Delta U=-100.0\ \mathrm{kJ\,mol^{-1}}\)，
    \(\Delta n_g=+2\)。估算\(\Delta H\)，取
    \(R=8.314\ \mathrm{J\,mol^{-1}\,K^{-1}}\)。

---

## 18. 练习答案

### 练习1

<details markdown="1">
<summary>完整答案</summary>

恒压时\(\Delta H=\Delta U+p\Delta V\)。仅有\(pV\)功时
\(\Delta U=q_p-p\Delta V\)。代入得\(\Delta H=q_p\)。

</details>

### 练习2

<details markdown="1">
<summary>完整答案</summary>

\(C\)：\(\mathrm{J\,K^{-1}}\)；\(c\)：\(\mathrm{J\,g^{-1}\,K^{-1}}\)或其他每质量
单位；\(C_m\)：\(\mathrm{J\,mol^{-1}\,K^{-1}}\)。

</details>

### 练习3

<details markdown="1">
<summary>完整答案</summary>

\[
q=(50.0)(4.184)(7.50)=1.57\times10^3\ \mathrm J
\]

</details>

### 练习4

<details markdown="1">
<summary>完整答案</summary>

\[
q=C\Delta T=(125)(-8.0)=-1.0\times10^3\ \mathrm J
\]

</details>

### 练习5

<details markdown="1">
<summary>完整答案</summary>

恒压加热气体常伴随膨胀并对外做功；同样温升除增加内能外还需提供膨胀功，所以输入热
通常多于恒容情况。

</details>

### 练习6

<details markdown="1">
<summary>完整答案</summary>

\[
q_\mathrm{solution}=(150.0)(4.18)(3.00)=1.881\ \mathrm{kJ}
\]

\[
q_\mathrm{rxn}=-1.881\ \mathrm{kJ}
\]

\[
\Delta_\mathrm rH
=
\frac{-1.881}{0.0200}
=-94.1\ \mathrm{kJ\,mol^{-1}}
\]

</details>

### 练习7

<details markdown="1">
<summary>完整答案</summary>

\[
q_\mathrm{cal}=(45)(3.00)=135\ \mathrm J
\]

\[
q_\mathrm{rxn}=-(1881+135)\ \mathrm J=-2.016\ \mathrm{kJ}
\]

\[
\Delta_\mathrm rH=-100.8\ \mathrm{kJ\,mol^{-1}}
\]

</details>

### 练习8

<details markdown="1">
<summary>完整答案</summary>

\[
q_\mathrm{cal}=(10.0)(1.85)=18.5\ \mathrm{kJ}
\]

所以样品在恒容条件下：

\[
\Delta U=q_V=-18.5\ \mathrm{kJ}
\]

</details>

### 练习9

<details markdown="1">
<summary>完整答案</summary>

\[
q
=
m c_\mathrm{ice}(T_\mathrm{fus}-T_i)
+n\Delta H_\mathrm{fus}
+m c_\mathrm{water}(T_\mathrm b-T_\mathrm{fus})
+n\Delta H_\mathrm{vap}
+m c_\mathrm{steam}(T_f-T_\mathrm b)
\]

若起点、终点或压力不同，应使用相应转变温度和热容积分。

</details>

### 练习10

<details markdown="1">
<summary>完整答案</summary>

两句都错。相变可在近似恒温下吸放潜热；绝热压缩可在\(q=0\)时因环境做功而升温。

</details>

### 练习11

<details markdown="1">
<summary>完整答案</summary>

反应焓按所写反应进度缩放，正逆反应变号；同一物质的气、液、固态焓不同，所以缺少
计量或物态就不能唯一解释数值。

</details>

### 练习12

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta H
=
\Delta U+\Delta n_gRT
\]

\[
\Delta n_gRT
=(2)(8.314)(298)
=4.96\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta H\approx-100.0+4.96=-95.0\ \mathrm{kJ\,mol^{-1}}
\]

</details>

---

## 19. 本课小结

1. 焓定义为\(H=U+pV\)，是状态函数，不是“系统所含的热”。
2. 封闭、恒压且只有\(pV\)功时，\(q_p=\Delta H\)。
3. 恒容且只有\(pV\)功时，\(q_V=\Delta U\)。
4. 理想气体反应在同温下有\(\Delta H=\Delta U+\Delta n_gRT\)。
5. 热容、比热容和摩尔热容分别按整个系统、单位质量和单位物质的量定义。
6. \(q=C\Delta T=mc\Delta T=nC_m\Delta T\)要求热容在温区内可近似恒定且无未计相变。
7. \(C_V=(\partial U/\partial T)_V\)，\(C_p=(\partial H/\partial T)_p\)。
8. 对气体通常\(C_p>C_V\)，理想气体摩尔热容满足\(C_{p,m}-C_{V,m}=R\)。
9. 量热守恒为反应、溶液和量热器各项热量代数和为0。
10. 溶液温升为正时，作为能量来源的反应热通常为负。
11. 咖啡杯量热近似恒压测\(\Delta H\)，量热弹近似恒容测\(\Delta U\)。
12. 相变可在近似恒温下吸放能量，需用转变焓分段计算。
13. 反应焓随方程式倍乘并在反向时变号，物态不可省略。
14. 精密量热必须校准并处理热漏、基线、真实热容和测量不确定度。

---

## 20. 下一课

量热能直接测得部分反应焓，但许多目标过程无法单独实施：

> 怎样把多个已知反应翻转、倍乘和相加，得到未知反应焓？标准生成焓的参考状态怎样
> 定义？如何将升华、电离、键解离、电子亲和与晶格形成连接为Born–Haber循环？

---

## 21. 术语与资料来源

本页热容与量热术语依据IUPAC资料核对，访问日期为2026-07-23：

- [IUPAC Gold Book：heat capacity、\(C_V\)与\(C_p\)](https://goldbook.iupac.org/terms/view/H02753)
- [IUPAC Green Book：\(H=U+pV\)、热容与单位](https://publications.iupac.org/books/gbook/green_book_2ed.pdf)
- [IUPAC：差示扫描量热的校准与不确定度](https://publications.iupac.org/pac/78/7/1455/)
- [IUPAC：等温微量热的标准与校准](https://publications.iupac.org/pac/73/10/1625/)

进一步参考：

- Peter Atkins, Julio de Paula, *Physical Chemistry*, enthalpy and
  calorimetry sections.
- Theodore L. Brown et al., *Chemistry: The Central Science*, thermochemistry
  chapter.
