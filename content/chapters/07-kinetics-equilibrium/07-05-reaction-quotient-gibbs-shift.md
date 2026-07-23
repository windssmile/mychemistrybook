---
title: "7.5 反应商、自由能与平衡移动"
chapter: 7
unit: 7.5
status: draft-v0.1
estimated_study_time: "135–180分钟"
level: core
---

# 7.5 反应商、自由能与平衡移动

## 本课要解决的问题

平衡常数只描述平衡组成，怎样判断一个任意组成的体系接下来向哪一侧变化？标准反应
Gibbs能为什么不能直接判断所有实际混合物？\(Q<K\)、\(Q=K\)、\(Q>K\)分别表示
什么？加料、移除、压缩、加入惰性气体和升温怎样通过\(Q\)或\(K\)产生响应？为什么
催化剂不造成平衡移动？

本课建立三个等价判据：

\[
\boxed{
\Delta_\mathrm rG
=\Delta_\mathrm rG^\circ+RT\ln Q
}
\]

\[
\boxed{
\Delta_\mathrm rG^\circ=-RT\ln K
}
\]

\[
\boxed{
\Delta_\mathrm rG=RT\ln\frac QK
}
\]

---

## 学习目标

完成本课后，你应该能够：

1. 用当前活度定义反应商\(Q\)；
2. 区分\(Q\)与\(K\)；
3. 用\(Q<K\)、\(Q=K\)、\(Q>K\)判断净反应方向；
4. 由\(\Delta_\mathrm rG^\circ\)和\(Q\)计算实际
   \(\Delta_\mathrm rG\)；
5. 推导\(\Delta_\mathrm rG^\circ=-RT\ln K\)；
6. 由\(K\)计算标准反应Gibbs能，或反向计算；
7. 用\(\Delta_\mathrm rG=RT\ln(Q/K)\)统一方向判据；
8. 用\(Q\)解释加料和移除组分；
9. 用\(\Delta n_g\)分析理想气体压缩；
10. 区分恒容和恒压加入惰性气体；
11. 用温度改变\(K\)解释吸热、放热反应的响应；
12. 说明催化剂不改变\(Q\)、\(K\)和平衡组成；
13. 限定Le Châtelier原理的适用方式；
14. 避免把瞬时扰动、响应方向和新平衡组成混为一谈。

---

## 学习本课之前

- [7.4](./07-04-dynamic-equilibrium-activity-constant.md)中的活度与\(K\)；
- [6.5](../06-thermochemistry-thermodynamics/06-05-gibbs-spontaneity.md)中的标准与实际
  Gibbs能边界；
- [6.6](../06-thermochemistry-thermodynamics/06-06-temperature-coupling-boundaries.md)
  中的温度和耦合；
- 自然对数和Kelvin温度。

### 3分钟诊断

1. \(K\)是否可用任意时刻的组成计算？
2. \(\Delta_\mathrm rG^\circ<0\)是否保证任意当前组成均向正反应变化？
3. 恒容向理想气体平衡加入惰性气体，反应物分压是否改变？
4. 升温时，是只改变\(Q\)还是也改变\(K\)？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 不能；任意时刻同形式的活度组合叫\(Q\)，只有平衡时\(Q=K\)；
2. 不保证，实际方向还取决于\(RT\ln Q\)；
3. 不改变；各反应气体的物质的量、温度和体积不变；
4. 温度会改变\(K\)，也可能立即改变气体分压或活度；需在新温度重新判断。

</details>

---

## 1. 反应商\(Q\)

对：

\[
\sum_i\nu_i\ce{B_i}=0
\]

在任意当前组成定义：

\[
\boxed{
Q=\prod_i a_i^{\nu_i}
}
\]

它与\(K\)形式相同，区别在取值时刻：

- \(Q\)：当前状态，可随反应和扰动改变；
- \(K\)：指定温度下平衡状态的常数；
- 平衡时：\(Q=K\)。

对：

\[
\ce{aA+bB<=>cC+dD}
\]

\[
Q=
\frac{a_\ce C^c a_\ce D^d}
{a_\ce A^a a_\ce B^b}
\]

纯标准态固体和液体的活度处理与7.4相同。

---

## 2. \(Q\)与\(K\)判断方向

\[
\boxed{
\begin{array}{lll}
Q<K &\Rightarrow& \text{正向净变化}\\
Q=K &\Rightarrow& \text{平衡}\\
Q>K &\Rightarrow& \text{逆向净变化}
\end{array}
}
\]

直观上：

- \(Q\)过小：当前“产物活度组合”相对平衡值不足，正向反应增加\(Q\)；
- \(Q\)过大：当前产物组合过多，逆向反应降低\(Q\)。

“向右/向左”只对应所写反应式；反应式反向后，\(Q\)和\(K\)都取倒数，但物理预测
不变。

### 示例1

对：

\[
\ce{A(g)<=>2B(g)}
\]

某温度\(K=4.00\)。当前理想气体状态：

\[
\frac{p_\ce A}{p^\circ}=0.50,
\qquad
\frac{p_\ce B}{p^\circ}=1.00
\]

\[
Q=\frac{(1.00)^2}{0.50}=2.00
\]

因为：

\[
Q<K
\]

体系有正向净变化趋势。

---

## 3. 实际反应Gibbs能

各物种化学势：

\[
\mu_i=\mu_i^\circ+RT\ln a_i
\]

反应Gibbs能：

\[
\Delta_\mathrm rG=\sum_i\nu_i\mu_i
\]

代入：

\[
\Delta_\mathrm rG
=
\sum_i\nu_i\mu_i^\circ
+
RT\sum_i\nu_i\ln a_i
\]

\[
\sum_i\nu_i\mu_i^\circ
=\Delta_\mathrm rG^\circ
\]

\[
\sum_i\nu_i\ln a_i
=\ln\prod_i a_i^{\nu_i}
=\ln Q
\]

所以：

\[
\boxed{
\Delta_\mathrm rG
=\Delta_\mathrm rG^\circ+RT\ln Q
}
\]

这正是第6章留下的非标准组成接口。

---

## 4. 标准Gibbs能与平衡常数

平衡时：

\[
\Delta_\mathrm rG=0
\]

\[
Q=K
\]

所以：

\[
0=\Delta_\mathrm rG^\circ+RT\ln K
\]

\[
\boxed{
\Delta_\mathrm rG^\circ=-RT\ln K
}
\]

也可写：

\[
\boxed{
K=\exp\left(
-\frac{\Delta_\mathrm rG^\circ}{RT}
\right)
}
\]

因此：

| \(K\) | \(\ln K\) | \(\Delta_\mathrm rG^\circ\) |
|---:|---:|---:|
| \(>1\) | \(>0\) | \(<0\) |
| \(=1\) | \(=0\) | \(=0\) |
| \(<1\) | \(<0\) | \(>0\) |

这是标准态之间的关系，不是说\(K>1\)时任意组成下实际
\(\Delta_\mathrm rG\)都为负。

### 示例2：由\(K\)求标准Gibbs能

298.15 K时：

\[
K=1.00\times10^5
\]

\[
\Delta_\mathrm rG^\circ
=-(8.314)(298.15)\ln(10^5)
\]

\[
\boxed{
\Delta_\mathrm rG^\circ
\approx-28.5\ \mathrm{kJ\,mol^{-1}}
}
\]

---

## 5. 最紧凑的方向判据

把：

\[
\Delta_\mathrm rG^\circ=-RT\ln K
\]

代入实际Gibbs能式：

\[
\Delta_\mathrm rG
=-RT\ln K+RT\ln Q
\]

\[
\boxed{
\Delta_\mathrm rG
=RT\ln\frac QK
}
\]

因为\(R,T>0\)：

- \(Q/K<1\)：\(\ln(Q/K)<0\)，正向有利；
- \(Q/K=1\)：\(\Delta_\mathrm rG=0\)；
- \(Q/K>1\)：逆向有利。

### 示例3：标准态有利，实际却逆向

298.15 K时：

\[
\Delta_\mathrm rG^\circ=-10.0\ \mathrm{kJ\,mol^{-1}}
\]

当前：

\[
Q=100
\]

\[
\Delta_\mathrm rG
=-10.0+(8.314\times10^{-3})(298.15)\ln100
\]

\[
\boxed{
\Delta_\mathrm rG
\approx+1.41\ \mathrm{kJ\,mol^{-1}}
}
\]

尽管标准反应Gibbs能为负，当前产物组合很大，使实际正向反应Gibbs能为正。

### 即时检查1

某体系\(Q=0.010\)，\(K=10\)。所写正向的\(\Delta_\mathrm rG\)符号是什么？

<details markdown="1">
<summary>答案</summary>

\[
\frac QK=0.001<1
\]

所以：

\[
\Delta_\mathrm rG<0
\]

正向净变化有利。

</details>

---

## 6. 扰动分析的三步法

不要先背“向哪边移动”，而要按以下顺序：

1. **旧平衡：** \(Q_\mathrm{old}=K_\mathrm{old}\)；
2. **瞬时扰动：** 在反应尚未来得及进行时，判断哪些活度改变，计算
   \(Q_\mathrm{after}\)；
3. **松弛响应：** 比较\(Q_\mathrm{after}\)与新温度下的\(K\)，判断净反应方向，
   直到重新满足\(Q=K\)。

“瞬时变化”和“反应后的新平衡变化”必须分开。例如向体系加入反应物后，它的浓度先
突增，随后正向反应只会消耗其中一部分，不能说它一定回到原浓度。

---

## 7. 加入或移除组分

对：

\[
\ce{A+B<=>C}
\]

\[
Q=\frac{a_\ce C}{a_\ce A a_\ce B}
\]

在温度不变时：

- 加A：分母增大，\(Q\)减小，若\(Q<K\)则正向响应；
- 移除A：分母减小，\(Q\)增大，可能逆向响应；
- 加C：分子增大，\(Q\)增大，逆向响应；
- 移除C：\(Q\)减小，正向响应。

这不是说扰动被“完全抵消”。新平衡仍可能保留比扰动前更多的所加入组分。

### 7.1 加纯固体

若纯固体活度为1，增加已经存在的该纯固体不会改变\(Q\)，因而不引起平衡组成响应。
但若固相原先不存在、加入后开放了新的相平衡，问题就不是简单的“小扰动”。

---

## 8. 改变气体体积或压力

对理想气体，在恒温下瞬时把体积缩小为原来的\(1/\lambda\)：

\[
p_i'=\lambda p_i
\]

若气体反应的：

\[
\Delta n_g
=\sum_\mathrm{products}\nu_i
-\sum_\mathrm{reactants}|\nu_i|
\]

则：

\[
\boxed{
Q'=\lambda^{\Delta n_g}Q
}
\]

### 8.1 压缩

\(\lambda>1\)：

- \(\Delta n_g<0\)：\(Q\)减小，响应趋向气体物质的量较少一侧；
- \(\Delta n_g>0\)：\(Q\)增大，响应趋向气体物质的量较少一侧；
- \(\Delta n_g=0\)：理想模型中\(Q\)不变，无组成移动。

所以“加压向气体少的一侧”是该推导的结果，而不是无条件口诀。

### 示例4：氨合成

\[
\ce{N2+3H2<=>2NH3}
\]

\[
\Delta n_g=2-(1+3)=-2
\]

压缩使所有分压乘\(\lambda\)：

\[
Q'=\lambda^{-2}Q<Q
\]

若原先平衡，则\(Q'<K\)，发生正向净响应。

### 8.2 改变总压力不等于压缩反应气体

加入惰性气体也可提高总压力，却不一定改变反应物分压。必须说明约束。

---

## 9. 加入惰性气体

### 9.1 恒温恒容

加入惰性气体后：

- 总压力升高；
- 反应气体的\(n_i,T,V\)不变；
- \(p_i=n_iRT/V\)不变；
- \(Q\)不变。

因此理想气体平衡组成不移动。

### 9.2 恒温恒总压

为了保持总压不变，容器体积增大，所有反应气体分压按同一比例降低。相当于膨胀：

- 体系响应趋向气体物质的量较多一侧；
- 若\(\Delta n_g=0\)，理想模型中无移动。

“加入惰性气体是否移动平衡”没有脱离恒容/恒压条件的单一答案。

---

## 10. 温度改变的是\(K\)

浓度、压力和加料扰动在温度不变时改变\(Q\)，不改变\(K\)。温度扰动不同：

\[
K=K(T)
\]

van ’t Hoff关系：

\[
\boxed{
\frac{\mathrm d\ln K}{\mathrm dT}
=\frac{\Delta_\mathrm rH^\circ}{RT^2}
}
\]

在\(\Delta_\mathrm rH^\circ\)符号不变的温区：

- 吸热反应\(\Delta H^\circ>0\)：升温使\(K\)增大；
- 放热反应\(\Delta H^\circ<0\)：升温使\(K\)减小。

因此“把热看作反应物或产物”可以辅助记忆，但热不是平衡表达式中的化学物种，不能把
“热浓度”写进\(Q\)或\(K\)。

### 10.1 温度骤变后的比较

温度改变后应：

1. 使用新温度的\(K_\mathrm{new}\)；
2. 评估瞬时组成和活度对应的\(Q_\mathrm{after}\)；
3. 比较二者。

仅用旧\(K\)判断会出错。

---

## 11. 催化剂为什么不移动平衡

在理想化操作中，若加入催化剂本身不显著改变温度、体积、溶剂或反应物组成，则催化剂：

- 不改变当前组成，所以加入瞬间通常不改变\(Q\)；
- 不改变同温度下\(\Delta_\mathrm rG^\circ\)，所以不改变\(K\)；
- 降低正逆方向的动力学势垒；
- 使\(Q\)更快趋向\(K\)。

若体系已经平衡，加入催化剂后仍有\(Q=K\)，正逆速率可同时增大但仍相等。

---

## 12. Le Châtelier原理的正确位置

Le Châtelier原理可概括为：平衡体系受到扰动后，会出现减弱该扰动影响的净响应。

它适合作定性提示，但\(Q/K\)方法更可靠，因为后者：

- 明确反应式方向；
- 明确哪些量真正进入表达式；
- 区分恒容与恒压；
- 处理\(\Delta n_g=0\)；
- 区分改变\(Q\)和改变\(K\)；
- 避免把纯固体质量写进表达式。

响应“减弱”不等于完全抵消外界改变，也不意味着所有可观察量都沿同一方向变化。

---

## 13. 稀释溶液的边界

若把理想稀溶液体积瞬时扩大，每个溶质浓度按相同比例降低。形式上可类似气体膨胀，用
溶质化学计量数之差判断\(Q\)变化。

但真实离子溶液还会同时改变：

- 活度系数；
- 离子强度；
- 溶剂活度；
- 可能的水解、缔合和多重平衡。

因此“稀释总向溶解粒子数更多一侧”只是在理想、单一平衡近似下的初筛，不是普适
定律。

---

## 14. 压力、浓度与\(K\)的常见混淆

平衡组成随压力或初始浓度改变，不等于\(K\)改变。例如压缩氨合成平衡：

- 瞬时分压改变，\(Q\)改变；
- 体系组成响应；
- 新平衡仍满足同一个温度下的\(K\)。

只有温度改变时，基础化学中才通常说平衡常数改变。

---

## 15. 常见误区

### 误区1：用当前组成算出的任何比值都叫\(K\)

未平衡时叫\(Q\)。

### 误区2：\(\Delta G^\circ<0\)就永远正向

实际\(\Delta G\)还含\(RT\ln Q\)。

### 误区3：加压一定使平衡移动

理想气体反应若\(\Delta n_g=0\)，同倍压缩不改变\(Q\)。

### 误区4：提高总压力等于提高各反应气体分压

恒容加入惰性气体提高总压，但反应气体分压不变。

### 误区5：升温只改变速率，不改变平衡

温度通常改变\(K\)；催化剂才不改变\(K\)。

### 误区6：加入纯固体反应物一定推动正向

若该纯相已存在，活度仍为1，\(Q\)不变。

### 误区7：平衡响应会完全抵消扰动

体系只部分响应并达到新的平衡。

---

## 16. 分层练习

### 基础层

1. 定义\(Q\)，并说明它与\(K\)的区别。
2. \(Q>K\)时所写正向的\(\Delta_\mathrm rG\)符号是什么？
3. 推导\(\Delta_\mathrm rG^\circ=-RT\ln K\)使用了哪两个平衡条件？
4. 若\(K<1\)，\(\Delta_\mathrm rG^\circ\)符号是什么？

### 应用层

5. 298.15 K时\(K=1.00\times10^{-4}\)，求
   \(\Delta_\mathrm rG^\circ\)。
6. 某反应\(\Delta_\mathrm rG^\circ=+5.00\ \mathrm{kJ\,mol^{-1}}\)，
   298.15 K时\(Q=0.0100\)，求实际\(\Delta_\mathrm rG\)并判断方向。
7. 对\(\ce{2SO2(g)+O2(g)<=>2SO3(g)}\)，恒温压缩时瞬时\(Q\)怎样改变？
8. 对上述体系，恒温恒容加入He，平衡组成是否移动？

### 综合层

9. 对放热反应，升温后\(K\)怎样变化？为什么不能只用旧\(K\)判断？
10. 在\(\ce{CaCO3(s)<=>CaO(s)+CO2(g)}\)平衡中加入更多
    \(\ce{CaCO3(s)}\)，只要两固相仍存在，会不会改变平衡
    \(p_{\ce{CO2}}\)？
11. 解释恒压加入惰性气体为什么与恒容情形可能给出不同结果。
12. 某学生说“催化剂使产物生成更快，所以平衡向产物移动”。纠正。

---

## 17. 完整答案

### 练习1

<details markdown="1">
<summary>完整答案</summary>

\[
Q=\prod_i a_i^{\nu_i}
\]

\(Q\)用当前活度，可随时间改变；\(K\)是指定温度下平衡时的值。平衡时\(Q=K\)。

</details>

### 练习2

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta_\mathrm rG
=RT\ln(Q/K)>0
\]

所以逆向有利。

</details>

### 练习3

<details markdown="1">
<summary>完整答案</summary>

平衡时：

\[
\Delta_\mathrm rG=0
\qquad
Q=K
\]

代入\(\Delta_\mathrm rG=\Delta_\mathrm rG^\circ+RT\ln Q\)即可。

</details>

### 练习4

<details markdown="1">
<summary>完整答案</summary>

\[
\ln K<0
\]

\[
\Delta_\mathrm rG^\circ=-RT\ln K>0
\]

</details>

### 练习5

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta_\mathrm rG^\circ
=-(8.314)(298.15)\ln(10^{-4})
\]

\[
\boxed{
\Delta_\mathrm rG^\circ
\approx+22.8\ \mathrm{kJ\,mol^{-1}}
}
\]

</details>

### 练习6

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta_\mathrm rG
=5.00+(8.314\times10^{-3})(298.15)\ln(0.0100)
\]

\[
\Delta_\mathrm rG
\approx5.00-11.41
=-6.41\ \mathrm{kJ\,mol^{-1}}
\]

正向有利。

</details>

### 练习7

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta n_g=2-(2+1)=-1
\]

若各分压乘\(\lambda>1\)：

\[
Q'=\lambda^{-1}Q<Q
\]

若原先平衡，则压缩后\(Q'<K\)，正向响应。

</details>

### 练习8

<details markdown="1">
<summary>完整答案</summary>

不移动。恒温恒容时各反应气体的\(n_i,T,V\)不变，分压不变，故\(Q\)不变。

</details>

### 练习9

<details markdown="1">
<summary>完整答案</summary>

放热反应\(\Delta H^\circ<0\)，由van ’t Hoff关系，升温使\(K\)减小。温度改变后
平衡目标已变为\(K_\mathrm{new}\)，用旧\(K\)比较没有意义。

</details>

### 练习10

<details markdown="1">
<summary>完整答案</summary>

不会。纯固体活度为1，加入更多\(\ce{CaCO3}\)不改变\(Q\)或\(K\)；在给定温度下
平衡\(\ce{CO2}\)分压不变，但可继续分解的物质量增加。

</details>

### 练习11

<details markdown="1">
<summary>完整答案</summary>

恒容时加入惰性气体只增加总压，反应气体分压不变。恒总压时容器必须膨胀，反应气体
分压降低，\(Q\)按\(\Delta n_g\)改变，可能向气体物质的量更多一侧响应。

</details>

### 练习12

<details markdown="1">
<summary>完整答案</summary>

催化剂同时加快正逆反应，不改变当前组成、\(\Delta G^\circ\)或\(K\)。未平衡体系更快
趋近同一平衡；已平衡体系的正逆速率可同时增大，但净速率仍为零。

</details>

---

## 18. 本课小结

1. 反应商\(Q\)与\(K\)形式相同，但使用当前活度。
2. \(Q<K\)正向响应，\(Q=K\)平衡，\(Q>K\)逆向响应。
3. 实际反应Gibbs能为
   \(\Delta_\mathrm rG=\Delta_\mathrm rG^\circ+RT\ln Q\)。
4. 平衡时得到
   \(\Delta_\mathrm rG^\circ=-RT\ln K\)。
5. 最紧凑的方向判据是
   \(\Delta_\mathrm rG=RT\ln(Q/K)\)。
6. 标准Gibbs能符号只对应标准态，不能代替任意组成的方向判断。
7. 加料、移除和压缩通常先改变\(Q\)，温度不变时\(K\)不变。
8. 理想气体同倍压缩有\(Q'=\lambda^{\Delta n_g}Q\)。
9. 恒容加入惰性气体不改变反应气体分压；恒压加入会造成膨胀。
10. 温度改变\(K\)：吸热反应升温时\(K\)增大，放热反应相反。
11. 催化剂本身不改变\(K\)和平衡组成；在不伴随体积、温度或介质变化的操作中也不
    改变\(Q\)，只改变松弛速率。
12. Le Châtelier原理应作为\(Q/K\)分析的定性摘要，而不是脱离条件的口诀。
13. 加入已存在的纯标准态固体不改变\(Q\)。
14. 平衡响应减弱扰动，不保证完全抵消扰动。

---

## 19. 下一课

本课能判断“向哪边走”，但还没算“最终多少”。下一课将把：

\[
Q=K
\]

与物料守恒、化学计量变化和非负约束组合：

> 怎样用ICE表求平衡组成？何时可以作“小\(x\)”近似，怎样验证近似？多个反应相加、
> 反向或共享物种时，怎样组合平衡常数而不破坏守恒？

---

## 20. 术语与资料来源

本页反应商、反应Gibbs能与平衡常数关系依据IUPAC资料核对，访问日期为2026-07-24：

- [IUPAC Gold Book：chemical equilibrium](https://goldbook.iupac.org/terms/view/C01023)
- [IUPAC Gold Book：standard equilibrium constant](https://goldbook.iupac.org/terms/view/S05915)
- [IUPAC Green Book：反应商、活度和平衡常数符号](https://publications.iupac.org/books/gbook/green_book_2ed.pdf)
- [IUPAC关于标准量、活度与平衡常数的建议](https://publications.iupac.org/pac-2007/1994/pdf/6603x0533.pdf)

进一步参考：

- Peter Atkins, Julio de Paula, *Physical Chemistry*, response of equilibria.
- Herbert B. Callen, *Thermodynamics and an Introduction to
  Thermostatistics*, Gibbs energy and equilibrium.
