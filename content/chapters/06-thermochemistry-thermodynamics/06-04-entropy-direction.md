---
title: "6.4 熵与变化方向"
chapter: 6
unit: 6.4
status: draft-v0.1
estimated_study_time: "135–180分钟"
level: core
---

# 6.4 熵与变化方向

## 本课要解决的问题

为什么热会自发地从高温物体传向低温物体，却不会自行完全倒流？气体向真空膨胀时
\(q=0\)，为什么熵仍增加？“熵就是混乱度”为什么容易误导？体系熵降低是否表示过程
不可能自发？怎样计算加热、相变、理想气体膨胀和化学反应的熵变？

本课用第二定律给出方向判据：

\[
\boxed{
\Delta S_\mathrm{univ}
=
\Delta S_\mathrm{sys}
+\Delta S_\mathrm{surr}
\ge 0
}
\]

自发不可逆过程有\(\Delta S_\mathrm{univ}>0\)；平衡的可逆极限有
\(\Delta S_\mathrm{univ}=0\)。

---

## 学习目标

完成本课后，你应该能够：

1. 说明熵是状态函数和广度量；
2. 用\(S=k_\mathrm B\ln W\)建立微观状态直观；
3. 说明“混乱度”比喻的局限；
4. 区分体系熵、环境熵和宇宙熵；
5. 使用第二定律判断过程方向；
6. 区分可逆路径与自发不可逆过程；
7. 使用\(\mathrm dS=\delta q_\mathrm{rev}/T\)计算熵变；
8. 解释绝热自由膨胀为何仍有\(\Delta S>0\)；
9. 计算恒热容或恒压加热的熵变；
10. 计算可逆相变熵\(\Delta S_\mathrm{trans}=\Delta H_\mathrm{trans}/T_\mathrm{trans}\)；
11. 计算理想气体等温膨胀熵变；
12. 定性判断物态、混合和气体计量对熵的影响；
13. 使用标准摩尔熵计算标准反应熵；
14. 区分第三定律熵与标准生成焓零点约定。

---

## 学习本课之前

- 6.1中的状态函数、绝热和自由膨胀；
- 6.2中的热容与相变焓；
- 6.3中的标准态和计量求和；
- 自然对数\(\ln x\)及Kelvin温标。

### 3分钟诊断

1. 若体系熵减少，过程是否必然非自发？
2. 绝热过程\(q=0\)是否必然有\(\Delta S=0\)？
3. 同一种物质通常气态、液态、固态哪个摩尔熵较大？
4. 元素参考态在298.15 K的标准摩尔熵是否按约定为零？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 不必然；还要看环境熵变；
2. 不必然；不可逆绝热过程可产生熵；
3. 通常气态最大、液态其次、固态较小；
4. 不为零；标准生成焓的零点约定不能搬到绝对熵。

</details>

---

## 1. 第一律没有给出方向

第一定律只要求能量守恒。例如两物体交换热量：

\[
q_\mathrm{hot}+q_\mathrm{cold}=0
\]

它同时允许代数上写出：

- 热从热物体流向冷物体；
- 等量热从冷物体流向热物体。

但经验告诉我们，孤立组合中前者自发、后者不自发。第二定律提供第一定律没有给出的
方向信息。

---

## 2. 熵是状态函数

熵\(S\)是广度状态函数，SI单位为：

\[
\mathrm{J\,K^{-1}}
\]

摩尔熵\(S_\mathrm m\)单位为：

\[
\mathrm{J\,mol^{-1}\,K^{-1}}
\]

对任意初、终平衡态：

\[
\Delta S=S_f-S_i
\]

只由状态决定。实际过程即使不可逆，也可选择一条连接同一初、终态的可逆假想路径来
计算\(\Delta S\)。

---

## 3. 微观解释：可达微观状态数

统计热力学给出Boltzmann关系：

\[
\boxed{S=k_\mathrm B\ln W}
\]

其中：

- \(k_\mathrm B\)为Boltzmann常数；
- \(W\)为与给定宏观约束相容的微观状态数。

### 3.1 宏观状态与微观状态

宏观状态由\(T,p,V,n\)等描述；微观状态进一步指定每个粒子的位置、动量和量子态占据。
大量不同微观状态可表现为同一个宏观状态。

若状态B可达的微观状态数大于A：

\[
W_B>W_A
\]

则：

\[
S_B>S_A
\]

### 3.2 为什么取对数

两个独立子系统的微观状态数相乘：

\[
W_\mathrm{total}=W_1W_2
\]

而熵应可加：

\[
S_\mathrm{total}
=
k_\mathrm B\ln(W_1W_2)
=S_1+S_2
\]

对数把乘法转化为加法。

---

## 4. “混乱度”只能作有限比喻

把熵简单称为“混乱度”容易造成问题：

- “混乱”缺乏可计算定义；
- 整齐摆放与否不是热力学微观状态数；
- 有序晶体也有振动和非零温度熵；
- 溶解、反应和相变同时改变能量分布、组成和可达状态；
- 局部结构更有序时，总熵仍可因环境变化而增加。

更稳妥的语言是：

> 熵量化在给定宏观约束下能量和粒子可分配到多少可达微观状态。

“能量更分散”“体积更大”“粒子类型更多”可提示熵变方向，但仍需检查具体约束。

---

## 5. 第二热力学定律

把研究体系与环境组成热力学宇宙：

\[
\Delta S_\mathrm{univ}
=
\Delta S_\mathrm{sys}
+\Delta S_\mathrm{surr}
\]

对自发过程：

\[
\boxed{\Delta S_\mathrm{univ}>0}
\]

对可逆平衡极限：

\[
\boxed{\Delta S_\mathrm{univ}=0}
\]

若假想方向给出：

\[
\Delta S_\mathrm{univ}<0
\]

该方向不能自发进行；其反方向才可能自发。

### 5.1 体系熵可以减少

结晶时体系变得更有序，常有：

\[
\Delta S_\mathrm{sys}<0
\]

但结晶向环境放热，使环境熵增加。只要：

\[
\Delta S_\mathrm{surr}>
\left|\Delta S_\mathrm{sys}\right|
\]

总过程仍可自发。

---

## 6. 可逆热与熵变

对可逆过程：

\[
\boxed{\mathrm dS=\frac{\delta q_\mathrm{rev}}{T}}
\]

有限变化：

\[
\boxed{
\Delta S=\int_i^f\frac{\delta q_\mathrm{rev}}{T}
}
\]

必须使用Kelvin温度。

### 6.1 为什么写\(q_\mathrm{rev}\)

熵是状态函数，但热依赖路径。只有沿可逆路径，\(\delta q_\mathrm{rev}/T\)可直接积分为
状态函数变化。

实际不可逆过程的：

\[
\frac{q_\mathrm{actual}}{T}
\]

一般不等于体系熵变。

### 6.2 可逆不等于“会自动发生”

可逆过程是无限接近平衡、可被无穷小条件变化反向的理想极限。它用于定义和计算，不是
现实过程能够以有限速率完美实现的描述。

---

## 7. 热从高温流向低温

设热量\(q>0\)从温度\(T_h\)的热库传向\(T_c\)的冷库，且\(T_h>T_c\)。

热库熵变：

\[
\Delta S_h=-\frac q{T_h}
\]

冷库熵变：

\[
\Delta S_c=+\frac q{T_c}
\]

总熵变：

\[
\Delta S_\mathrm{univ}
=
q\left(\frac1{T_c}-\frac1{T_h}\right)>0
\]

所以该方向自发。反向传同样热量会使总熵减少，需要外界做功，例如制冷机。

### 示例

\(500\ \mathrm J\)热从\(400\ \mathrm K\)物体传给\(300\ \mathrm K\)热库：

\[
\Delta S_\mathrm{univ}
=500\left(\frac1{300}-\frac1{400}\right)
=0.417\ \mathrm{J\,K^{-1}}
\]

---

## 8. 加热或冷却的熵变

若过程在恒压、无相变，且\(C_p\)近似恒定：

\[
\delta q_\mathrm{rev}=C_p\,\mathrm dT
\]

\[
\boxed{
\Delta S=C_p\ln\frac{T_2}{T_1}
}
\]

若使用摩尔热容：

\[
\Delta S=nC_{p,\mathrm m}\ln\frac{T_2}{T_1}
\]

恒容时相应使用\(C_V\)。

### 8.1 不能用摄氏温度比

\[
\ln\frac{50^\circ\mathrm C}{25^\circ\mathrm C}
\]

没有热力学意义。必须转换为绝对温度：

\[
\ln\frac{323.15\ \mathrm K}{298.15\ \mathrm K}
\]

### 即时检查1

物体恒压升温且无相变，体系熵通常增加还是减少？

<details markdown="1">
<summary>答案</summary>

\(T_2>T_1\)，故\(\ln(T_2/T_1)>0\)，若\(C_p>0\)，则\(\Delta S>0\)。

</details>

---

## 9. 相变熵

在平衡转变温度\(T_\mathrm{trans}\)和相应压力下，可逆相变有：

\[
\boxed{
\Delta S_\mathrm{trans}
=
\frac{\Delta H_\mathrm{trans}}
{T_\mathrm{trans}}
}
\]

### 9.1 熔化

\[
\Delta H_\mathrm{fus}>0
\]

所以：

\[
\Delta S_\mathrm{fus}>0
\]

### 9.2 汽化

\[
\Delta H_\mathrm{vap}>0
\]

通常：

\[
\Delta S_\mathrm{vap}>0
\]

气相有远多于凝聚相的平移可达状态。

### 示例：水的熔化

取\(\Delta H_\mathrm{fus}=6.01\ \mathrm{kJ\,mol^{-1}}\)，
\(T_\mathrm{fus}=273.15\ \mathrm K\)：

\[
\Delta S_\mathrm{fus}
=
\frac{6.01\times10^3}{273.15}
=22.0\ \mathrm{J\,mol^{-1}\,K^{-1}}
\]

凝固为逆过程，熵变为\(-22.0\ \mathrm{J\,mol^{-1}\,K^{-1}}\)。

---

## 10. 理想气体等温膨胀

对理想气体沿可逆等温路径：

\[
\Delta U=0
\]

吸收的热补偿输出功，得到：

\[
\boxed{
\Delta S
=
nR\ln\frac{V_2}{V_1}
}
\]

由\(pV=nRT\)：

\[
\Delta S
=
-nR\ln\frac{p_2}{p_1}
\]

膨胀时\(V_2>V_1\)，所以\(\Delta S>0\)。

---

## 11. 自由膨胀：\(q=0\)但\(\Delta S>0\)

理想气体在绝热容器中向真空自由膨胀：

\[
q_\mathrm{actual}=0,\qquad
w=0,\qquad
\Delta U=0
\]

但终态体积更大：

\[
\Delta S=nR\ln\frac{V_2}{V_1}>0
\]

这并不矛盾，因为不能把不可逆实际路径中的\(q_\mathrm{actual}/T=0\)当作熵变。我们用
连接相同初终态的可逆等温路径计算\(\Delta S\)。

自由膨胀是“绝热不等于等熵”的关键反例。

---

## 12. 混合熵

不同理想气体在同温同压下混合，每种气体可占据更大可用体积，可达微观状态增多。
理想混合熵为：

\[
\boxed{
\Delta S_\mathrm{mix}
=
-R\sum_i n_i\ln x_i
}
\]

因\(0<x_i<1\)，所以\(\ln x_i<0\)，不同组分理想混合时：

\[
\Delta S_\mathrm{mix}>0
\]

### 12.1 相同气体的“混合”

若隔板两侧是同温同压、不可区分的同一种理想气体，移去隔板不产生可辨认新组成，
宏观混合熵为0。不能把粒子人为贴标签后制造可测熵变。

### 12.2 真实溶液

真实混合还含相互作用和非理想性。混合熵通常有利于混合，但总自由能还受混合焓影响；
因此“熵增加”不保证任意两物质完全互溶。

---

## 13. 定性判断熵变

### 13.1 常见有利于熵增加的变化

- 固体→液体→气体；
- 气体膨胀；
- 不同粒子混合；
- 气态产物计量数明显增加；
- 分子自由度或可访问构象增加；
- 能量分散到更多粒子或模式。

### 13.2 这些只是趋势，不是完整算法

例如反应气体摩尔数不变时，标准熵仍可因：

- 分子复杂度；
- 对称性；
- 转动惯量；
- 振动频率；
- 凝聚相贡献不同而改变。

“数气体摩尔数”是快速初筛，不是标准反应熵的替代品。

### 13.3 溶解熵不总为正

溶质分散可增加可达状态，但强溶剂化可能使周围溶剂形成更受限的局部排列；离子晶格
破坏和水合共同决定结果。应使用数据或完整自由能分析。

---

## 14. 第三定律与绝对熵

第三定律的理想表述为：

> 完美有序晶体在\(0\ \mathrm K\)的熵取零。

从0 K起积分热容并加上各相变熵，可得到物质在较高温度的绝对熵：

\[
S(T)
=
\int_0^T\frac{C_p}{T}\,\mathrm dT
+\sum\frac{\Delta H_\mathrm{trans}}{T_\mathrm{trans}}
\]

### 14.1 现实边界

- 真实晶体可能存在取向无序和残余熵；
- 绝对零度不可通过有限步骤达到；
- 相变、低温热容和晶型必须明确；
- “完美晶体熵为零”不是说所有物质在298 K的熵为零。

### 14.2 与生成焓零点的区别

- 元素参考态\(\Delta_\mathrm fH^\circ=0\)是热化学基线约定；
- 标准摩尔熵\(S^\circ\)在298.15 K通常为正；
- 计算反应熵使用绝对标准摩尔熵，不把元素项删除。

---

## 15. 标准反应熵

对标准态反应：

\[
\boxed{
\Delta_\mathrm rS^\circ
=
\sum_\mathrm{products}\nu S^\circ
-
\sum_\mathrm{reactants}\nu S^\circ
}
\]

单位通常为：

\[
\mathrm{J\,mol^{-1}\,K^{-1}}
\]

这里“mol”仍指单位反应进度。

### 示例：氨合成

\[
\ce{N2(g)+3H2(g)->2NH3(g)}
\]

取代表性标准摩尔熵：

\[
S^\circ(\ce{NH3})=192.8
\]

\[
S^\circ(\ce{N2})=191.6,\qquad
S^\circ(\ce{H2})=130.7
\]

单位均为\(\mathrm{J\,mol^{-1}\,K^{-1}}\)。

\[
\Delta_\mathrm rS^\circ
=
2(192.8)-[191.6+3(130.7)]
\]

\[
\Delta_\mathrm rS^\circ
\approx-198.1\ \mathrm{J\,mol^{-1}\,K^{-1}}
\]

气体计量数从4降到2，负号与定性预期一致。

---

## 16. 环境熵的常用近似

若环境是温度恒定的巨大热库，体系在恒压下与其交换热：

\[
q_\mathrm{surr}=-q_\mathrm{sys}
\]

若体系过程热为\(\Delta H_\mathrm{sys}\)：

\[
\boxed{
\Delta S_\mathrm{surr}
=
-\frac{\Delta H_\mathrm{sys}}{T}
}
\]

于是：

- 体系放热\(\Delta H_\mathrm{sys}<0\)，环境熵增加；
- 体系吸热\(\Delta H_\mathrm{sys}>0\)，环境熵减少。

该式要求环境温度近似恒定，并使用与过程条件相容的体系焓变。

---

## 17. 一套可靠的方向判断流程

1. 明确体系与环境；
2. 判断或计算\(\Delta S_\mathrm{sys}\)；
3. 由热交换求\(\Delta S_\mathrm{surr}\)；
4. 相加得到\(\Delta S_\mathrm{univ}\)；
5. 正值：该方向自发；零：可逆平衡极限；负值：该方向非自发；
6. 不把“自发”解释为“快速”；
7. 若恒温恒压，可在6.5用Gibbs自由能把体系和环境合并进单一判据。

---

## 18. 常见误区

1. **熵就是肉眼的混乱度**：应以微观状态数和能量/粒子分配理解。
2. **体系熵降低就不自发**：方向由宇宙总熵决定。
3. **绝热过程熵不变**：只有可逆绝热过程等熵。
4. **\(\Delta S=q_\mathrm{actual}/T\)**：必须使用可逆路径热。
5. **可逆过程就是自然快速发生**：可逆是无限接近平衡的理想极限。
6. **相变温度不变所以无熵变**：相变有潜热和转变熵。
7. **气体摩尔数增加就精确决定熵变**：只是常见一级趋势。
8. **溶解熵必为正**：溶剂有序化等效应可改变符号。
9. **元素标准熵为零**：298 K标准摩尔熵通常非零。
10. **熵增加意味着能量增加**：熵和内能是不同状态函数。

---

## 19. 本课练习

1. 为什么第一定律不能单独判断热流方向？
2. 用\(S=k_\mathrm B\ln W\)说明两个独立系统熵为何可加。
3. \(600\ \mathrm J\)热从\(500\ \mathrm K\)热库传给\(300\ \mathrm K\)热库，求
   \(\Delta S_\mathrm{univ}\)。
4. \(2.00\ \mathrm{mol}\)物质的恒压摩尔热容为
   \(30.0\ \mathrm{J\,mol^{-1}\,K^{-1}}\)，由300 K加热到450 K，求\(\Delta S\)。
5. 某物质在350 K的熔化焓为\(12.0\ \mathrm{kJ\,mol^{-1}}\)，求熔化熵。
6. 1.00 mol理想气体在恒温下由10.0 L膨胀到20.0 L，求\(\Delta S\)。
7. 为什么绝热自由膨胀的\(q=0\)不能推出\(\Delta S=0\)？
8. 两种各1.00 mol理想气体混合，最终摩尔分数均为0.5，求混合熵。
9. 定性判断\(\ce{CaCO3(s)->CaO(s)+CO2(g)}\)的体系熵变趋势。
10. 为什么结晶可以自发，即使晶体体系熵降低？
11. 用标准摩尔熵表达式写出\(\ce{2SO2(g)+O2(g)->2SO3(g)}\)的
    \(\Delta_\mathrm rS^\circ\)。
12. 判断：“石墨是元素参考态，所以它在298 K的\(S^\circ=0\)。”

---

## 20. 练习答案

### 练习1

<details markdown="1">
<summary>完整答案</summary>

第一定律只要求热物体失去的能量等于冷物体得到的能量，正反热流都可满足能量守恒；
第二定律通过总熵增加选出自发方向。

</details>

### 练习2

<details markdown="1">
<summary>完整答案</summary>

独立系统组合微观状态数相乘：

\[
W=W_1W_2
\]

\[
S=k\ln(W_1W_2)=k\ln W_1+k\ln W_2=S_1+S_2
\]

</details>

### 练习3

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta S_\mathrm{univ}
=600\left(\frac1{300}-\frac1{500}\right)
=0.800\ \mathrm{J\,K^{-1}}
\]

正值说明热从500 K流向300 K是自发方向。

</details>

### 练习4

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta S
=nC_{p,m}\ln\frac{T_2}{T_1}
=(2.00)(30.0)\ln\frac{450}{300}
\]

\[
\Delta S=24.3\ \mathrm{J\,K^{-1}}
\]

</details>

### 练习5

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta S_\mathrm{fus}
=\frac{12.0\times10^3}{350}
=34.3\ \mathrm{J\,mol^{-1}\,K^{-1}}
\]

</details>

### 练习6

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta S
=nR\ln\frac{V_2}{V_1}
=(1.00)(8.314)\ln2
=5.76\ \mathrm{J\,K^{-1}}
\]

</details>

### 练习7

<details markdown="1">
<summary>完整答案</summary>

自由膨胀不可逆，体系熵不能由实际路径\(q_\mathrm{actual}/T\)计算。用连接相同初终态的
可逆等温膨胀路径可得\(nR\ln(V_2/V_1)>0\)。

</details>

### 练习8

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta S_\mathrm{mix}
=-R[n_1\ln x_1+n_2\ln x_2]
\]

\[
=-8.314[1.00\ln0.5+1.00\ln0.5]
=11.5\ \mathrm{J\,K^{-1}}
\]

</details>

### 练习9

<details markdown="1">
<summary>完整答案</summary>

由两个固体生成一个固体和一份气体，气体平移可达状态显著增加，通常预期
\(\Delta S_\mathrm{sys}>0\)。精确值仍应用标准摩尔熵计算。

</details>

### 练习10

<details markdown="1">
<summary>完整答案</summary>

结晶体系熵可为负，但结晶放热使环境熵增加。低于适当相变温度时，环境增熵可超过体系
减熵，使\(\Delta S_\mathrm{univ}>0\)。

</details>

### 练习11

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta_\mathrm rS^\circ
=2S^\circ(\ce{SO3(g)})
-[2S^\circ(\ce{SO2(g)})+S^\circ(\ce{O2(g)})]
\]

</details>

### 练习12

<details markdown="1">
<summary>完整答案</summary>

错误。参考态的标准生成焓按约定为零；第三定律标准摩尔熵从0 K热容和相变积分得到，
石墨在298 K的\(S^\circ\)为正。

</details>

---

## 21. 本课小结

1. 熵是广度状态函数，微观上可由\(S=k_\mathrm B\ln W\)理解。
2. “混乱度”只是有限比喻，可达微观状态和能量/粒子分配更准确。
3. 第二定律要求自发过程\(\Delta S_\mathrm{univ}>0\)，可逆平衡极限为0。
4. 体系熵可降低，只要环境增熵更多。
5. 熵变由\(\Delta S=\int\delta q_\mathrm{rev}/T\)计算，不能一般使用实际不可逆热。
6. 热从高温流向低温使宇宙总熵增加。
7. 恒热容加热有\(\Delta S=C\ln(T_2/T_1)\)，温度必须用K。
8. 平衡相变有\(\Delta S_\mathrm{trans}=\Delta H_\mathrm{trans}/T_\mathrm{trans}\)。
9. 理想气体等温膨胀有\(\Delta S=nR\ln(V_2/V_1)\)。
10. 绝热自由膨胀虽然\(q=0\)，但因不可逆且体积增大，体系熵增加。
11. 不同理想气体混合通常有正混合熵；真实混合还受相互作用影响。
12. 物态和气体计量可作熵变初筛，但不能替代标准摩尔熵数据。
13. 第三定律给绝对熵基线；元素参考态在298 K的标准熵不为零。
14. 标准反应熵等于产物标准摩尔熵计量和减反应物计量和。

---

## 22. 下一课

第二定律用“体系+环境”判断方向，但实验化学常希望只看体系：

> 在恒温恒压条件下，怎样把体系焓变和熵变合并为Gibbs自由能？为什么
> \(\Delta G<0\)表示热力学自发方向，却不表示反应快速或进行完全？

---

## 23. 术语与资料来源

本页熵定义和符号依据IUPAC资料核对，访问日期为2026-07-24：

- [IUPAC Gold Book：entropy、\(S=k\ln W\)与第三定律基线](https://goldbook.iupac.org/terms/view/E02149)
- [IUPAC Green Book：熵与摩尔熵的量纲和单位](https://publications.iupac.org/books/gbook/green_book_2ed.pdf)
- [IUPAC：第一、第二定律与可逆熵定义](https://publications.iupac.org/pac/pdf/1970/pdf/2203x0511.pdf)

进一步参考：

- Peter Atkins, Julio de Paula, *Physical Chemistry*, entropy and the second
  law.
- Daniel V. Schroeder, *An Introduction to Thermal Physics*, entropy and
  multiplicity chapters.
