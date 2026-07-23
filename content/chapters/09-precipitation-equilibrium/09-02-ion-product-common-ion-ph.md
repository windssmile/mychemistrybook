---
title: "9.2 离子积、同离子与pH效应"
chapter: 9
unit: 9.2
status: draft-v0.1
estimated_study_time: "135–180分钟"
level: core
---

# 9.2 离子积、同离子与pH效应

## 本课要解决的问题

任意时刻的溶液怎样与饱和状态比较？混合两杯溶液后为什么必须先算稀释？同离子为何
通常降低摩尔溶解度？为什么含碱性阴离子的沉淀常可被酸促进溶解，而\(\ce{Cl-}\)型
沉淀未必如此？给定pH时怎样判断金属氢氧化物是否开始沉淀？

本课建立：

\[
\boxed{
Q_\mathrm{sp}
=a_{\ce{M^{n+}}}^{\,m}a_{\ce{X^{m-}}}^{\,n}
}
\]

\[
\boxed{
Q_\mathrm{sp}<K_\mathrm{sp}:\text{未饱和方向}
\quad
Q_\mathrm{sp}=K_\mathrm{sp}:\text{饱和}
\quad
Q_\mathrm{sp}>K_\mathrm{sp}:\text{析出方向有利}
}
\]

---

## 学习目标

完成本课后，你应该能够：

1. 区分\(Q_\mathrm{sp}\)与\(K_\mathrm{sp}\)；
2. 用活度构造任意当前组成的\(Q_\mathrm{sp}\)；
3. 在混合溶液后先计算各离子的瞬时浓度；
4. 用\(Q_\mathrm{sp}/K_\mathrm{sp}\)判断稳定变化方向；
5. 区分热力学析出方向与可见沉淀出现速度；
6. 求开始沉淀所需的临界离子浓度；
7. 计算一比一固体的同离子条件溶解度；
8. 检验“同离子浓度远大于\(s\)”的近似；
9. 区分同离子效应与惰性电解质盐效应；
10. 用物种分布解释pH对溶解度的影响；
11. 在固定pH条件下用分布分数求条件溶解度；
12. 判断金属氢氧化物的沉淀pH；
13. 说明酸并非能显著溶解所有难溶盐；
14. 识别活度、缓冲容量和副反应边界。

---

## 学习本课之前

- [9.1](./09-01-solubility-ksp-saturation.md)：\(K_\mathrm{sp}\)、摩尔溶解度和固相；
- [7.5](../07-kinetics-equilibrium/07-05-reaction-quotient-gibbs-shift.md)：
  \(Q/K\)判断方向；
- [8.4](../08-acid-base/08-04-polyprotic-salt-hydrolysis-speciation.md)：
  酸碱物种分布；
- [1.6](../01-chemical-language/01-06-solutions-concentration-aqueous-reactions.md)：
  溶液混合后的浓度。

### 3分钟诊断

1. 等体积混合前后，每杯溶液中原有离子的浓度是否保持不变？
2. \(Q_\mathrm{sp}>K_\mathrm{sp}\)是否保证一瞬间出现肉眼可见颗粒？
3. 向\(\ce{MX(s)}\)饱和体系加入含\(\ce{X-}\)的可溶盐，平衡通常向哪边响应？
4. 酸消耗沉淀释放的阴离子时，溶解反应的\(Q_\mathrm{sp}\)怎样响应？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 不保持；应按物质的量和混合后总体积计算；
2. 不保证，成核、生长和检测限影响观察；
3. 向固体方向；
4. 自由阴离子活度下降，\(Q_\mathrm{sp}\)下降，溶解方向受到促进。

</details>

---

## 1. \(Q_\mathrm{sp}\)是当前快照

对：

\[
\ce{M_mX_n(s)<=>mM^{n+}+nX^{m-}}
\]

任意当前组成的离子积：

\[
Q_\mathrm{sp}
=a_{\ce{M^{n+}}}^{\,m}a_{\ce{X^{m-}}}^{\,n}
\]

\(Q_\mathrm{sp}\)使用**当前活度**，不要求体系已平衡；\(K_\mathrm{sp}\)是在指定温度、
压力、溶剂和固相下的平衡常数。

| 比较 | 热力学含义 |
|---|---|
| \(Q_\mathrm{sp}<K_\mathrm{sp}\) | 若有固体，净溶解方向有利；若无固体，溶液未饱和 |
| \(Q_\mathrm{sp}=K_\mathrm{sp}\) | 与指定固相达到饱和关系 |
| \(Q_\mathrm{sp}>K_\mathrm{sp}\) | 析出使离子积下降的方向有利 |

当\(Q_\mathrm{sp}<K_\mathrm{sp}\)而系统中根本没有可溶的该固体时，只能说溶液未饱和，
不能说“必然发生溶解”。

---

## 2. 混合后先算瞬时浓度

混合引发反应前的瞬时浓度：

\[
c_{i,\mathrm{mix}}
=\frac{c_{i,0}V_i}{V_\mathrm{tot}}
\]

若同一离子来自多份溶液，应先把物质的量相加。体积可加只是稀溶液常用近似。

### 示例1：是否沉淀

混合50.0 mL、\(2.00\times10^{-4}\ \mathrm{mol\,L^{-1}}\)的\(\ce{Ag+}\)
溶液与50.0 mL、\(1.00\times10^{-4}\ \mathrm{mol\,L^{-1}}\)的\(\ce{Cl-}\)
溶液。假设：

\[
K_\mathrm{sp}^c(\ce{AgCl})=1.8\times10^{-10}
\]

混合瞬间：

\[
[\ce{Ag+}]=1.00\times10^{-4}
\]

\[
[\ce{Cl-}]=5.00\times10^{-5}\ \mathrm{mol\,L^{-1}}
\]

\[
Q_\mathrm{sp}^c
=(1.00\times10^{-4})(5.00\times10^{-5})
=5.00\times10^{-9}
\]

\[
\boxed{Q_\mathrm{sp}^c>K_\mathrm{sp}^c}
\]

析出方向热力学有利。若忘记总体积，两种离子浓度都会被高估。

---

## 3. 开始沉淀的临界条件

对\(\ce{MX}\)型固体：

\[
K_\mathrm{sp}^c=[\ce{M}][\ce{X}]
\]

在\([\ce{X}]\)已知时，刚达到饱和边界所需：

\[
\boxed{
[\ce{M}]_\mathrm{crit}
=\frac{K_\mathrm{sp}^c}{[\ce{X}]}
}
\]

低于该值时未饱和；高于该值时析出方向有利。这里的浓度必须是反应前混合后的自由离子
浓度，而不是原试剂瓶浓度或总分析浓度。

---

## 4. 同离子效应

考虑：

\[
\ce{MX(s)<=>M+ + X-}
\]

若溶液初始已有\(C_X\)的\(\ce{X-}\)，固体再溶解\(s\)：

\[
[\ce{M+}]=s
\]

\[
[\ce{X-}]=C_X+s
\]

\[
K_\mathrm{sp}^c=s(C_X+s)
\]

精确正根：

\[
\boxed{
s=\frac{-C_X+\sqrt{C_X^2+4K_\mathrm{sp}^c}}2
}
\]

若\(C_X\gg s\)：

\[
\boxed{
s\approx\frac{K_\mathrm{sp}^c}{C_X}
}
\]

### 示例2

设\(K_\mathrm{sp}^c=1.0\times10^{-10}\)，
\(C_X=0.0100\ \mathrm{mol\,L^{-1}}\)：

\[
s\approx\frac{1.0\times10^{-10}}{0.0100}
=1.0\times10^{-8}\ \mathrm{mol\,L^{-1}}
\]

而纯水中\(s=1.0\times10^{-5}\ \mathrm{mol\,L^{-1}}\)。同离子使条件摩尔溶解度
约降至千分之一。所得\(s/C_X=10^{-6}\)，忽略\(s\)自洽。

---

## 5. 同离子效应不等于所有“加盐效应”

加入不含共同离子的惰性电解质，可能改变离子强度和活度系数。热力学
\(K_\mathrm{sp}\)保持不变时，为达到相同离子活度乘积，饱和溶液的**浓度乘积**可能
改变，常被称作盐效应。

因此要区分：

- **同离子效应：** 共同离子直接进入\(Q_\mathrm{sp}\)，通常抑制溶解；
- **离子强度效应：** 通过活度系数改变浓度与活度的关系。

本章不建立完整活度系数模型，不能把“加任何可溶盐都降低溶解度”当作规则。

---

## 6. pH为何能改变溶解度

若沉淀阴离子是弱酸的共轭碱：

\[
\ce{MX(s)<=>M+ + X-}
\]

\[
\ce{X-+H+<=>HX}
\]

酸消耗自由\(\ce{X-}\)，使溶解反应的\(Q_\mathrm{sp}\)下降。为重新达到
\(K_\mathrm{sp}\)，更多固体可溶解。

但若阴离子是极弱碱，质子化不显著，酸促进作用可能很小。因此“难溶盐都溶于酸”
错误；必须检查沉淀离子是否参与有利的酸碱或其他反应。

---

## 7. 固定pH下的条件溶解度

设\(\ce{HX<=>H+ + X-}\)，且：

\[
K_a=\frac{[\ce{H+}][\ce{X-}]}{[\ce{HX}]}
\]

定义溶解后阴离子总浓度：

\[
C_{X,\mathrm T}=[\ce{X-}]+[\ce{HX}]
\]

自由\(\ce{X-}\)分数：

\[
\alpha_{\ce{X-}}
=\frac{K_a}{K_a+[\ce{H+}]}
\]

对\(\ce{MX}\)，若每溶解1 mol生成一份金属和一份总阴离子：

\[
[\ce{M+}]=s
\]

\[
[\ce{X-}]=\alpha_{\ce{X-}}s
\]

\[
K_\mathrm{sp}^c=\alpha_{\ce{X-}}s^2
\]

\[
\boxed{
s=\sqrt{\frac{K_\mathrm{sp}^c}{\alpha_{\ce{X-}}}}
}
\]

这是假定pH由足够容量的缓冲体系固定、其他副反应可忽略的**条件溶解度**。

### 示例3

\[
K_\mathrm{sp}^c=1.0\times10^{-10},
\qquad K_a=1.0\times10^{-6}
\]

在pH 4.00时：

\[
\alpha_{\ce{X-}}
=\frac{10^{-6}}{10^{-6}+10^{-4}}
=0.009901
\]

\[
\boxed{
s=\sqrt{\frac{10^{-10}}{0.009901}}
=1.00\times10^{-4}\ \mathrm{mol\,L^{-1}}
}
\]

这约为忽略质子化时\(10^{-5}\ \mathrm{mol\,L^{-1}}\)的10倍。若溶解消耗的酸足以
显著改变pH，就不能把pH固定，而应联立酸碱与物料守恒。

---

## 8. 金属氢氧化物与沉淀pH

对：

\[
\ce{M(OH)2(s)<=>M^{2+}+2OH-}
\]

\[
Q_\mathrm{sp}^c
=[\ce{M^{2+}}][\ce{OH-}]^2
\]

开始沉淀时：

\[
\boxed{
[\ce{OH-}]_\mathrm{crit}
=\sqrt{\frac{K_\mathrm{sp}^c}{[\ce{M^{2+}}]}}
}
\]

### 示例4

假设\(K_\mathrm{sp}^c=1.0\times10^{-11}\)，混合后自由
\([\ce{M^{2+}}]=1.0\times10^{-3}\ \mathrm{mol\,L^{-1}}\)：

\[
[\ce{OH-}]_\mathrm{crit}=1.0\times10^{-4}\ \mathrm{mol\,L^{-1}}
\]

25 °C理想浓度近似下：

\[
\mathrm{pOH}=4.00
\]

\[
\boxed{\mathrm{pH}_\mathrm{crit}=10.00}
\]

这里忽略了金属水解、羟基配合、活度和沉淀造成的浓度变化；它给出“刚开始”的理想
边界，不等于定量沉淀完成的pH。

---

## 9. 一套可靠的判断流程

```text
1. 写可能固相的溶解反应
2. 写Ksp和当前Qsp
3. 混合后先按总体积求瞬时自由离子浓度
4. 比较Qsp与Ksp
5. 若求开始沉淀，令Qsp=Ksp求临界值
6. 若求溶解度，写溶解计量和初始同离子
7. 若有pH效应，写阴离子分布或OH-浓度
8. 回代检验同离子、固定pH和活度近似
9. 区分热力学方向与可见沉淀动力学
```

---

## 10. 常见误区

1. 用混合前浓度直接计算\(Q_\mathrm{sp}\)；
2. 把总分析浓度无条件当作自由离子浓度；
3. 把\(Q_\mathrm{sp}>K_\mathrm{sp}\)写成“瞬间定量沉淀”；
4. 在同离子计算中不检验\(C_\mathrm{common}\gg s\)；
5. 把同离子效应与惰性电解质的离子强度效应混为一谈；
6. 认为加酸能显著溶解所有难溶盐；
7. 把开始沉淀条件当作定量沉淀完成条件；
8. 假定pH固定，却不检查缓冲体系是否能承受反应消耗。

---

## 11. 分层练习

1. 对\(\ce{CaF2}\)写\(Q_\mathrm{sp}\)活度式。
2. 等体积混合\(2.0\times10^{-4}\) M \(\ce{M+}\)与
   \(4.0\times10^{-5}\) M \(\ce{X-}\)。若
   \(K_\mathrm{sp}^c(\ce{MX})=1.0\times10^{-9}\)，判断方向。
3. 若\(\ce{MX}\)的\(K_\mathrm{sp}^c=2.0\times10^{-10}\)，
   \([\ce{X-}]=0.0200\) M，求开始沉淀的\([\ce{M+}]\)。
4. 对练习3，求\(\ce{MX}\)在0.0200 M \(\ce{X-}\)中的近似摩尔溶解度。
5. 练习4所得近似怎样验证？
6. 为什么加入不含共同离子的电解质不能简单归入同离子效应？
7. 若一元酸\(\ce{HX}\)的\(\mathrm pK_a=5.00\)，求pH 5.00时
   \(\ce{X-}\)的分布分数。
8. 对\(\ce{MX}\)，\(K_\mathrm{sp}^c=4.0\times10^{-12}\)，且pH固定条件下
   \(\alpha_{\ce{X-}}=0.0100\)。求条件摩尔溶解度。
9. \(\ce{M(OH)3}\)开始沉淀时应满足什么浓度关系？
10. 为什么酸通常更能促进碳酸盐而非氯化物沉淀溶解？
11. \(Q_\mathrm{sp}>K_\mathrm{sp}\)却暂时澄清，是否违反热力学？
12. 列出求沉淀pH时至少三项可能使简单结果偏离实际的因素。

---

## 12. 完整答案

<details markdown="1">
<summary>查看1—6题答案</summary>

1. \(Q_\mathrm{sp}=a_{\ce{Ca^{2+}}}a_{\ce{F-}}^2\)。
2. 混合后\([\ce M]=1.0\times10^{-4}\) M，
   \([\ce X]=2.0\times10^{-5}\) M；
   \(Q^c=2.0\times10^{-9}>K_\mathrm{sp}^c\)，析出方向有利。
3. \([\ce M]_\mathrm{crit}=2.0\times10^{-10}/0.0200
   =1.0\times10^{-8}\) M。
4. \(s\approx K_\mathrm{sp}^c/C_X=1.0\times10^{-8}\) M。
5. 检查\(s/C_X=5.0\times10^{-7}\ll1\)，并回代
   \(s(C_X+s)\)。
6. 它不直接向\(Q_\mathrm{sp}\)加入共同离子，主要可能通过离子强度改变活度系数。

</details>

<details markdown="1">
<summary>查看7—12题答案</summary>

7. pH等于\(\mathrm pK_a\)时两形态活度近似相等，
   \(\alpha_{\ce{X-}}\approx0.500\)。
8. \(s=\sqrt{4.0\times10^{-12}/0.0100}
   =2.0\times10^{-5}\ \mathrm{mol\,L^{-1}}\)。
9. \([\ce{M^{3+}}][\ce{OH-}]^3=K_\mathrm{sp}^c\)。
10. 碳酸根是弱酸的碱性共轭形态，可被质子化并进一步形成其他物种，降低自由阴离子
    活度；氯离子在水中是很弱的碱，通常不被普通酸显著消耗。
11. 不违反。该状态热力学上有析出趋势，但成核势垒可使其暂时过饱和。
12. 金属水解、羟基配合、活度系数、温度、其他配体或沉淀、pH缓冲容量及成核过饱和。

</details>

---

## 13. 本课小结

1. \(Q_\mathrm{sp}\)描述当前离子活度组合，\(K_\mathrm{sp}\)描述饱和平衡。
2. \(Q_\mathrm{sp}/K_\mathrm{sp}\)给稳定变化方向，不给析出速度。
3. 混合溶液必须先用总体积求瞬时自由离子浓度。
4. 开始沉淀的边界满足\(Q_\mathrm{sp}=K_\mathrm{sp}\)。
5. 同离子直接进入离子积，通常降低条件溶解度。
6. 同离子近似必须检查共同离子浓度是否远大于新增浓度。
7. 惰性电解质可经活度系数产生盐效应，不等于同离子效应。
8. 酸消耗碱性阴离子，会降低自由阴离子分数并促进溶解。
9. 酸并不显著促进所有难溶盐溶解。
10. 固定pH条件溶解度可由酸碱分布分数与\(K_\mathrm{sp}\)联立。
11. 金属氢氧化物开始沉淀可由临界\([\ce{OH-}]\)换算为pH。
12. 开始沉淀不等于定量沉淀完成。
13. 总分析浓度不一定等于自由离子浓度。
14. 复杂体系应回到活度、平衡和守恒联立。

---

## 14. 下一课

下一课把临界条件用于多种离子的竞争：

> 两种金属离子何时先后沉淀？“先沉淀”是否等于“可以定量分离”？一种固体转化为
> 另一种时，怎样由总反应的平衡常数判断方向？

---

## 15. 术语与资料来源

本页离子积沿用第7章反应商定义，溶度积依据IUPAC术语；访问日期为2026-07-24：

- [IUPAC Gold Book：reaction quotient](https://goldbook.iupac.org/terms/view/R05156)
- [IUPAC Gold Book：solubility product](https://goldbook.iupac.org/terms/view/S05742)
- [IUPAC Gold Book：activity](https://goldbook.iupac.org/terms/view/A00115)

进一步参考：

- Daniel C. Harris, *Quantitative Chemical Analysis*, precipitation equilibria.
- IUPAC, *Glossary of Terms Related to Solubility*, Pure and Applied Chemistry 80
  (2008), 233–276.
