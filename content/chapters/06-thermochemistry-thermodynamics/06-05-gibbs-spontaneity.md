---
title: "6.5 Gibbs自由能与自发性"
chapter: 6
unit: 6.5
status: draft-v0.1
estimated_study_time: "120–165分钟"
level: core
---

# 6.5 Gibbs自由能与自发性

## 本课要解决的问题

怎样不显式计算整个环境的熵变，只用体系量判断恒温恒压过程的方向？放热反应为什么
仍可能不自发，吸热反应为什么仍可能自发？\(\Delta G<0\)究竟表示什么，不表示什么？
标准反应Gibbs能为负是否足以判断任意实际混合物都向正反应移动？热力学有利为什么
不保证反应快速？

本课定义：

\[
\boxed{G=H-TS}
\]

在恒温恒压条件下：

\[
\boxed{\Delta G=\Delta H-T\Delta S}
\]

并建立：

\[
\Delta G<0:\ \text{正向热力学自发}
\]

\[
\Delta G=0:\ \text{平衡}
\]

\[
\Delta G>0:\ \text{反向热力学自发}
\]

---

## 学习目标

完成本课后，你应该能够：

1. 定义Gibbs能并说明它是状态函数；
2. 从宇宙熵判据推导恒温恒压Gibbs判据；
3. 说明\(\Delta G=\Delta H-T\Delta S\)的条件；
4. 正确统一\(\Delta H\)与\(T\Delta S\)的单位；
5. 由\(\Delta G\)符号判断热力学方向；
6. 解释平衡时Gibbs能取约束条件下的极小值；
7. 区分标准反应Gibbs能与实际反应Gibbs能；
8. 使用标准生成Gibbs能计算标准反应Gibbs能；
9. 区分“自发”“快速”“完全”和“放热”；
10. 说明催化剂不改变反应初终态\(\Delta G\)；
11. 用相变例子解释\(\Delta G=0\)的相平衡；
12. 说明Gibbs判据的系统边界和非\(pV\)功边界。

---

## 学习本课之前

- 6.2中的焓与恒压热；
- [6.4](./06-04-entropy-direction.md)中的\(\Delta S_\mathrm{univ}\)；
- 6.3中的标准态和生成量；
- Kelvin温度与\(\mathrm J/\mathrm{kJ}\)换算。

### 3分钟诊断

1. \(\Delta H<0\)是否足以证明恒温恒压过程自发？
2. \(\Delta G<0\)是否给出反应完成所需时间？
3. 标准符号\({}^\circ\)是否表示任意实际浓度？
4. 平衡时正、逆反应是否都停止？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 不足，还需熵项；
2. 不给出；
3. 不表示，标准量对应规定标准态；
4. 不停止；宏观净变化为零，微观正逆过程仍可进行。

</details>

---

## 1. 从宇宙熵到体系Gibbs能

第二定律：

\[
\Delta S_\mathrm{univ}
=
\Delta S_\mathrm{sys}
+\Delta S_\mathrm{surr}
\]

若环境是恒温\(T\)的大热库，体系在恒压下只有压力—体积功：

\[
\Delta S_\mathrm{surr}
=-\frac{\Delta H_\mathrm{sys}}{T}
\]

于是：

\[
\Delta S_\mathrm{univ}
=
\Delta S_\mathrm{sys}
-\frac{\Delta H_\mathrm{sys}}{T}
\]

两边乘\(-T\)：

\[
-T\Delta S_\mathrm{univ}
=
\Delta H_\mathrm{sys}
-T\Delta S_\mathrm{sys}
\]

恒温时右侧为：

\[
\Delta G_\mathrm{sys}
=
\Delta H_\mathrm{sys}
-T\Delta S_\mathrm{sys}
\]

所以：

\[
\boxed{
\Delta G_\mathrm{sys}
=-T\Delta S_\mathrm{univ}
}
\]

因\(T>0\)，宇宙熵增加等价于体系Gibbs能降低。

---

## 2. Gibbs能的定义与条件

\[
\boxed{G=H-TS}
\]

\(G\)由状态函数组合而成，也是广度状态函数。

一般变化：

\[
\Delta G
=
\Delta H-\Delta(TS)
\]

只有初、终态温度相同或过程恒温时，才可简化为：

\[
\boxed{\Delta G=\Delta H-T\Delta S}
\]

### 2.1 判据适用条件

基础化学中的\(\Delta G\)方向判据假定：

- 封闭体系；
- 恒温、恒压；
- 体系仅受通常的组成变化约束；
- 除\(pV\)功外的外部约束已明确。

电化学、表面体系、生化固定pH等情形可能需要相应变换势或额外变量。

---

## 3. 三种符号

### 3.1 \(\Delta G<0\)

在所给组成、温度和压力下，正向变化可使体系Gibbs能降低，是热力学自发方向。

### 3.2 \(\Delta G=0\)

体系对该变化达到平衡。Gibbs能在给定约束下取局部或全局极小值，宏观组成不再有净
变化趋势。

### 3.3 \(\Delta G>0\)

所写正向不是自发方向；反向变化有\(-\Delta G<0\)。

### 即时检查1

某正向反应\(\Delta G=+12\ \mathrm{kJ\,mol^{-1}}\)。反向反应的Gibbs能变是多少？

<details markdown="1">
<summary>答案</summary>

\[
\Delta G_\mathrm{reverse}=-12\ \mathrm{kJ\,mol^{-1}}
\]

在同一状态条件下反向为热力学有利方向。

</details>

---

## 4. 单位必须统一

\(\Delta H\)常用：

\[
\mathrm{kJ\,mol^{-1}}
\]

\(\Delta S\)常用：

\[
\mathrm{J\,mol^{-1}\,K^{-1}}
\]

计算\(T\Delta S\)前必须换算。例如：

\[
\Delta S=-198\ \mathrm{J\,mol^{-1}\,K^{-1}}
=-0.198\ \mathrm{kJ\,mol^{-1}\,K^{-1}}
\]

若忘记除以1000，熵项会错误放大1000倍。

---

## 5. 焓项和熵项怎样竞争

\[
\Delta G=\Delta H-T\Delta S
\]

- \(\Delta H<0\)：焓项有利于负\(\Delta G\)；
- \(\Delta H>0\)：焓项不利；
- \(\Delta S>0\)：\(-T\Delta S<0\)，熵项有利；
- \(\Delta S<0\)：熵项不利。

| \(\Delta H\) | \(\Delta S\) | 基础温度趋势 |
|---|---|---|
| \(-\) | \(+\) | 各温度均有利 |
| \(+\) | \(-\) | 各温度均不利 |
| \(-\) | \(-\) | 低温较有利 |
| \(+\) | \(+\) | 高温较有利 |

该表假定\(\Delta H,\Delta S\)在所讨论温区近似不变；6.6将处理转变温度和热容修正边界。

---

## 6. 示例：氨合成的标准Gibbs能

\[
\ce{N2(g)+3H2(g)->2NH3(g)}
\]

取：

\[
\Delta_\mathrm rH^\circ=-92.2\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta_\mathrm rS^\circ=-198.1\ \mathrm{J\,mol^{-1}\,K^{-1}}
=-0.1981\ \mathrm{kJ\,mol^{-1}\,K^{-1}}
\]

在298.15 K，若近似使用这些量：

\[
\Delta_\mathrm rG^\circ
=
-92.2
-(298.15)(-0.1981)
\]

\[
\boxed{
\Delta_\mathrm rG^\circ
\approx-33.1\ \mathrm{kJ\,mol^{-1}}
}
\]

焓项有利，气体分子数减少使熵项不利；在298 K焓项占优。

注意这是标准态反应Gibbs能，不等于任何实际氨合成混合物此刻的\(\Delta_\mathrm rG\)。

---

## 7. 标准反应Gibbs能

标准反应Gibbs能写作：

\[
\Delta_\mathrm rG^\circ
\]

表示所有反应物、产物处于指定温度各自标准态时，按所写反应发生单位反应进度的Gibbs
能变。

它可由标准生成Gibbs能计算：

\[
\boxed{
\Delta_\mathrm rG^\circ
=
\sum_\mathrm{products}\nu\Delta_\mathrm fG^\circ
-
\sum_\mathrm{reactants}\nu\Delta_\mathrm fG^\circ
}
\]

元素参考态的：

\[
\Delta_\mathrm fG^\circ=0
\]

同样是参考基线约定。

---

## 8. 标准量不直接等于实际方向

实际反应混合物的方向取决于当前组成、分压或活度。即使：

\[
\Delta_\mathrm rG^\circ<0
\]

若产物已经积累很多，实际正向\(\Delta_\mathrm rG\)仍可能为正。

反之，\(\Delta_\mathrm rG^\circ>0\)的反应在极低产物活度或与其他过程耦合时，实际
正向也可能进行。

本节只保留边界：

> \(\Delta_\mathrm rG^\circ\)判断从标准态反应物到标准态产物的变化，不是任意组成的
> 通用方向判据。

非标准关系：

\[
\Delta_\mathrm rG
=
\Delta_\mathrm rG^\circ+RT\ln Q
\]

及其与平衡常数的联系见
[7.5](../07-kinetics-equilibrium/07-05-reaction-quotient-gibbs-shift.md)。在那里进一步
得到\(\Delta_\mathrm rG=RT\ln(Q/K)\)和
\(\Delta_\mathrm rG^\circ=-RT\ln K\)。

---

## 9. 相平衡

以熔化为例：

\[
\ce{solid -> liquid}
\]

在熔点\(T_\mathrm m\)和指定压力下，固液平衡：

\[
\Delta G_\mathrm{fus}=0
\]

所以：

\[
\Delta H_\mathrm{fus}
=T_\mathrm m\Delta S_\mathrm{fus}
\]

\[
T_\mathrm m
=
\frac{\Delta H_\mathrm{fus}}
{\Delta S_\mathrm{fus}}
\]

低于熔点时，熔化通常\(\Delta G>0\)，凝固有利；高于熔点时，熔化
\(\Delta G<0\)。

### 示例：263 K的冰熔化

近似取：

\[
\Delta H_\mathrm{fus}=6.01\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta S_\mathrm{fus}=22.0\ \mathrm{J\,mol^{-1}\,K^{-1}}
=0.0220\ \mathrm{kJ\,mol^{-1}\,K^{-1}}
\]

\[
\Delta G_\mathrm{fus}
=6.01-(263)(0.0220)
=+0.224\ \mathrm{kJ\,mol^{-1}}
\]

在该近似和压力下，263 K熔化不利，凝固有利。

---

## 10. “自发”不等于“快速”

\(\Delta G<0\)只描述初态到终态的热力学下降方向，不包含路径上的能垒。

例如：

- \(\ce{H2}\)与\(\ce{O2}\)生成水在常见条件下热力学有利，但无点火可长期共存；
- 金刚石转变为石墨在常温常压的热力学趋势与实际极慢速率可同时成立；
- 某些沉淀或晶型转变受成核势垒限制。

反应“多快”由动力学、活化能和机理决定，见
[第7章动力学部分](../07-kinetics-equilibrium/index.md)。

---

## 11. “自发”不等于“进行完全”

当反应进行时，组成变化会改变实际\(\Delta_\mathrm rG\)。体系趋向：

\[
\Delta_\mathrm rG=0
\]

的平衡组成，而不是必然耗尽所有反应物。

即使标准Gibbs能很负，平衡时仍可能残留少量反应物；“完全”是相对于测量精度和应用
要求的近似说法。

---

## 12. 催化剂不改变\(\Delta G\)

催化剂提供另一条较低活化能路径，能：

- 加快正反应；
- 加快逆反应；
- 更快达到相同热力学平衡。

它不改变：

- 反应物和产物状态函数；
- \(\Delta H,\Delta S,\Delta G\)；
- 平衡组成（在相同温压和总组成下）。

催化剂改变速率，不改变热力学驱动力。

---

## 13. Gibbs能与非膨胀功

在恒温恒压可逆过程中，体系Gibbs能降低的绝对值给出可输出的最大非膨胀功：

\[
w_{\mathrm{non\text{-}PV,max,by}
=-\Delta G
\]

这里“by”明确表示系统对环境输出功为正。若沿用本书“对系统做功为正”的\(w\)约定，
相应可逆非膨胀功写为：

\[
w_{\mathrm{non\text{-}PV,rev,on}
=\Delta G
\]

符号必须连同“由谁对谁做功”一起说明。实际不可逆过程可输出的有用功小于此上限。

---

## 14. 由生成Gibbs能计算

对甲烷燃烧：

\[
\ce{CH4(g)+2O2(g)->CO2(g)+2H2O(l)}
\]

若给出：

\[
\Delta_\mathrm fG^\circ(\ce{CH4(g)})=-50.8
\]

\[
\Delta_\mathrm fG^\circ(\ce{CO2(g)})=-394.4
\]

\[
\Delta_\mathrm fG^\circ(\ce{H2O(l)})=-237.1
\]

单位均为\(\mathrm{kJ\,mol^{-1}}\)，\(\ce{O2(g)}\)参考态为0：

\[
\Delta_\mathrm rG^\circ
=
[-394.4+2(-237.1)]-[-50.8]
\]

\[
\Delta_\mathrm rG^\circ
=-817.8\ \mathrm{kJ\,mol^{-1}}
\]

该值按燃烧1 mol \(\ce{CH4}\)的方程式定义。

---

## 15. 一套可靠的Gibbs判断流程

1. 明确温度、压力和体系；
2. 区分标准量还是实际量；
3. 若用\(\Delta H-T\Delta S\)，确认温度一致并统一单位；
4. 按所写方程式处理计量；
5. 判断\(\Delta G\)符号；
6. 把结论写成“在所给条件与组成下，正/反向热力学有利”；
7. 不从符号推断速率；
8. 不从标准量直接推断任意非标准混合物方向；
9. 平衡时写实际\(\Delta_\mathrm rG=0\)，而不是所有标准量为0。

---

## 16. 常见误区

1. **放热反应必自发**：熵项可能抵消。
2. **吸热反应必不自发**：正熵项在高温可占优。
3. **\(\Delta G<0\)表示反应快速**：速率由动力学决定。
4. **\(\Delta G<0\)表示反应物全耗尽**：体系趋向平衡组成。
5. **\(\Delta G^\circ<0\)适用于任何组成**：标准量只对应标准态路径。
6. **平衡时\(\Delta G^\circ=0\)**：平衡时实际反应Gibbs能为0；标准值一般不为0。
7. **催化剂使\(\Delta G\)更负**：催化剂只改变路径与速率。
8. **\(\Delta H\)用kJ、\(\Delta S\)用J直接相减**：必须统一单位。
9. **摄氏温度可直接乘熵**：必须使用Kelvin。
10. **Gibbs能判据无条件适用**：基础判据要求恒温恒压及明确约束。

---

## 17. 本课练习

1. 从\(\Delta S_\mathrm{univ}\)推导\(\Delta G=-T\Delta S_\mathrm{univ}\)的条件。
2. 某过程\(\Delta H=-45.0\ \mathrm{kJ\,mol^{-1}}\)、
   \(\Delta S=-120\ \mathrm{J\,mol^{-1}\,K^{-1}}\)，求298 K的\(\Delta G\)。
3. 某过程\(\Delta H=+25.0\ \mathrm{kJ\,mol^{-1}}\)、
   \(\Delta S=+95.0\ \mathrm{J\,mol^{-1}\,K^{-1}}\)，判断298 K方向。
4. 写出四种\(\Delta H/\Delta S\)组合的温度趋势。
5. 为什么\(\Delta_\mathrm rG^\circ<0\)不能单独判断任意实际混合物方向？
6. 用生成Gibbs能写出标准反应Gibbs能通式。
7. 用本节数据复算甲烷燃烧的\(\Delta_\mathrm rG^\circ\)。
8. 某相变在\(T_t\)平衡，证明\(\Delta H_\mathrm{trans}=T_t\Delta S_\mathrm{trans}\)。
9. 判断：“催化剂使热力学不利反应变成\(\Delta G<0\)。”
10. 判断：“\(\Delta G<0\)的反应必在实验时间内观察到且完全进行。”
11. 平衡时是\(\Delta_\mathrm rG\)还是\(\Delta_\mathrm rG^\circ\)等于0？
12. 体系恒温恒压变化\(\Delta G=-20\ \mathrm{kJ}\)，可逆时最多输出多少非\(pV\)功？

---

## 18. 练习答案

### 练习1

<details markdown="1">
<summary>完整答案</summary>

恒温环境中\(\Delta S_\mathrm{surr}=-\Delta H_\mathrm{sys}/T\)。恒温恒压、只有
\(pV\)功时：

\[
\Delta S_\mathrm{univ}
=\Delta S_\mathrm{sys}-\frac{\Delta H_\mathrm{sys}}T
\]

乘\(-T\)得到：

\[
-T\Delta S_\mathrm{univ}
=\Delta H_\mathrm{sys}-T\Delta S_\mathrm{sys}
=\Delta G_\mathrm{sys}
\]

</details>

### 练习2

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta S=-0.120\ \mathrm{kJ\,mol^{-1}\,K^{-1}}
\]

\[
\Delta G=-45.0-(298)(-0.120)
=-9.24\ \mathrm{kJ\,mol^{-1}}
\]

正向热力学有利。

</details>

### 练习3

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta G
=25.0-(298)(0.0950)
=-3.31\ \mathrm{kJ\,mol^{-1}}
\]

在298 K按该近似正向有利；低温时正焓项可能占优。

</details>

### 练习4

<details markdown="1">
<summary>完整答案</summary>

\(-H,+S\)：各温度有利；\(+H,-S\)：各温度不利；\(-H,-S\)：低温较有利；
\(+H,+S\)：高温较有利。前提是\(\Delta H,\Delta S\)在温区内近似不变。

</details>

### 练习5

<details markdown="1">
<summary>完整答案</summary>

标准量对应各物种标准态。实际Gibbs驱动力还随当前活度、分压和组成变化；产物累积可
使实际正向\(\Delta_\mathrm rG\)由负变为0乃至正。

</details>

### 练习6

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta_\mathrm rG^\circ
=
\sum_\mathrm{products}\nu\Delta_\mathrm fG^\circ
-
\sum_\mathrm{reactants}\nu\Delta_\mathrm fG^\circ
\]

</details>

### 练习7

<details markdown="1">
<summary>完整答案</summary>

\[
[-394.4+2(-237.1)]-[-50.8+2(0)]
=-817.8\ \mathrm{kJ\,mol^{-1}}
\]

</details>

### 练习8

<details markdown="1">
<summary>完整答案</summary>

相平衡时\(\Delta G_\mathrm{trans}=0\)：

\[
0=\Delta H_\mathrm{trans}-T_t\Delta S_\mathrm{trans}
\]

所以：

\[
\Delta H_\mathrm{trans}=T_t\Delta S_\mathrm{trans}
\]

</details>

### 练习9

<details markdown="1">
<summary>完整答案</summary>

错误。催化剂不改变初终态，因此不改变\(\Delta G\)；它降低正逆路径活化势垒，使体系
更快接近平衡。

</details>

### 练习10

<details markdown="1">
<summary>完整答案</summary>

错误。负\(\Delta G\)只说明方向；高活化能可使反应极慢，且反应进行后组成改变，
最终通常达到含反应物和产物的平衡，而非数学上的全部耗尽。

</details>

### 练习11

<details markdown="1">
<summary>完整答案</summary>

平衡时实际\(\Delta_\mathrm rG=0\)。\(\Delta_\mathrm rG^\circ\)是标准态性质，除特殊
情况外不等于0，并通过平衡常数反映平衡位置。

</details>

### 练习12

<details markdown="1">
<summary>完整答案</summary>

最多输出：

\[
w_{\mathrm{non\text{-}PV,max,by}
=-\Delta G
=20\ \mathrm{kJ}
\]

实际不可逆过程输出小于该上限。

</details>

---

## 19. 本课小结

1. Gibbs能定义为\(G=H-TS\)，是广度状态函数。
2. 恒温时\(\Delta G=\Delta H-T\Delta S\)；一般应写\(\Delta G=\Delta H-\Delta(TS)\)。
3. 恒温恒压基础条件下，\(\Delta G=-T\Delta S_\mathrm{univ}\)。
4. \(\Delta G<0\)表示正向热力学有利，等于0表示平衡，大于0表示反向有利。
5. 焓负有利、熵正有利；温度决定\(T\Delta S\)权重。
6. 计算前必须把\(\Delta H\)和\(T\Delta S\)换为相同单位。
7. 标准反应Gibbs能可由标准生成Gibbs能按“产物减反应物”计算。
8. 元素参考态的标准生成Gibbs能按约定为零。
9. 标准Gibbs能只描述标准态路径，不能单独决定任意实际组成的方向。
10. 相变平衡时\(\Delta G_\mathrm{trans}=0\)，故\(\Delta H=T\Delta S\)。
11. “自发”不等于快速，也不等于反应物完全耗尽。
12. 催化剂改变速率和路径，不改变\(\Delta G\)或平衡。
13. 恒温恒压可逆过程的\(-\Delta G\)给最大非膨胀输出功。
14. 非标准反应商关系与平衡组成见第7章7.4至7.6。

---

## 20. 下一课

本章最后把温度、耦合和模型边界集中起来：

> 怎样估算\(\Delta G\)改变符号的温度？一个不利反应怎样与更有利过程耦合？为什么
> 热力学允许不等于动力学可见，又为什么常数\(\Delta H,\Delta S\)近似不能跨越任意温区？

---

## 21. 术语与资料来源

本页Gibbs能定义和恒温恒压判据依据IUPAC资料核对，访问日期为2026-07-24：

- [IUPAC Gold Book：Gibbs energy \(G=H-TS\)](https://old.goldbook.iupac.org/html/G/G02629.html)
- [IUPAC Analytical Compendium：Gibbs能定义与单位](https://publications.iupac.org/analytical_compendium/Cha01sec38.pdf)
- [IUPAC：恒温恒压Gibbs能判据](https://publications.iupac.org/pac-2007/1994/pdf/6608x1641.pdf)
- [IUPAC：热力学势、自然变量与平衡](https://publications.iupac.org/pac/73/8/1349/)

进一步参考：

- Peter Atkins, Julio de Paula, *Physical Chemistry*, Gibbs energy.
- Daniel V. Schroeder, *An Introduction to Thermal Physics*, free energy.
