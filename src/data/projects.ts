export interface Project {
  title: string
  description: string // 卡片显示的简短描述
  imageAlt: string
  imageSrc?: string
  designProcess?: string // 详情页的完整设计过程
  fullDescription?: string // 详情页的完整描述
}

export const projects: Project[] = [
  {
    title: '患者特异性血液动力学指标在再血管术后股浅动脉中作为管腔重塑预测因子的研究 (2023)',
    description: '通过计算流体力学（CFD）与数据分析评估患者特异性血流参数，探索术后股浅动脉（SFA）管腔重塑的预测因子。',
    imageAlt: '股浅动脉血液动力学研究封面',
    imageSrc: '/projects/sfa-hemodynamics-cover.png',
    fullDescription: `
      <p>本研究旨在通过计算流体力学（CFD）与数据分析评估患者特异性血流参数，探索术后股浅动脉（SFA）管腔重塑的预测因子。</p>
    `,
    designProcess: `
      <h3>1.研究背景</h3>
      <p>股浅动脉疾病 （PAD）的特征是下肢动脉中富含脂质的斑块堆积在血管内壁，减少血管管径和血液供应。病症有由于下肢缺血导致的行动不便，慢性疼痛和截肢风险。目前，旁路手术，血管支架和气球再血管术作为成熟的治疗方案仍然面对着较高的血管再狭窄率。
       然而，这种慢性疾病汉很难在疼痛发生前被检测出来。 在病理学分析外，生物医疗领域最近有了使用计算机流体力学分析来判断动脉疾病风险的先例。 由此，这个项目的目标是构建一个电脑工作流以实现对在血管术后患者的监控</p>
        <img src="/projects/sfa-hemodynamics/research-background.png" alt="研究背景" class="w-full max-w-lg mx-auto rounded-lg shadow-md my-4" />
      
      <h3>2.研究方法简介</h3>
      <ul>
        <li><strong>（1） 使用常用的医疗影像实现CFD设置</strong> - 本项目只使用常见的患者资料，如CT和多普勒超声（DUS）影像来构成ANSYS Fluent分析</li>
        <li><strong>（2）对模拟结果加以计算得到与动脉疾病高度相关的指数</strong> - 使用血流对血管壁的剪切力相关的指数</li>
        <li><strong>（3） 找到与疾病相关的指标</strong> - 通过对比病人术前（血管全阻塞）；手术完（血管无阻塞）；和术后检查（血管部分阻塞）的指数找到潜在的Correlation和最适合判断血管再狭窄的血流动力学指数</li>
      </ul>
        <img src="/projects/sfa-hemodynamics/methodology.png" alt="研究方法" class="w-full max-w-2xl mx-auto rounded-lg shadow-md my-4" />
      
      <h3>3.数据收集与处理</h3>
      <p>本项目收集了<strong>3例再血管化手术患者</strong>的术前术后影像数据和临床随访信息：</p>
      <ul>
        <li><strong>3D模型</strong> - 使用患者的CT影相，在每一层影像中提取出股动脉的轮廓。对分割出的轮廓先进行extrapolation得到粗模型，再使用VMTK，Meshlab等工具进行优化。</li>
        <img src="/projects/sfa-hemodynamics/segmentation.png" alt="CT分割" class="w-full max-w-xl mx-auto rounded-lg shadow-md my-4" />
        <img src="/projects/sfa-hemodynamics/model-smoothing.png" alt="3D模型优化" class="w-full max-w-xl mx-auto rounded-lg shadow-md my-4" />
        <li><strong>边界条件</strong> - 直接从患者的DUS影相中提取，经过修正后在MATLAB中以矢量形式改写成抛物面作为动脉上游边界条件</li>
        <img src="/projects/sfa-hemodynamics/boundary-condition.png" alt="边界条件" class="w-full max-w-xl mx-auto rounded-lg shadow-md my-4" />
        <li><strong>优化处理</strong> - 为了更好的比较术前术后的血流动力学指标，所有3D模型都会在Rhinoceros中提前进行处理：坏点清楚，错乱几何清楚，阻塞区域上下游分割，边界分割和中心线提取。</li>
      </ul>
      <img src="/projects/sfa-hemodynamics/data-collection.png" alt="数据收集与处理" class="w-full max-w-2xl mx-auto rounded-lg shadow-md my-4" />
      
      <h3>4.CFD仿真分析</h3>
      <p>使用计算流体力学软件对每个患者的血管模型进行血流动力学分析：</p>
      <ul>
        <li><strong>网格生成</strong> - 高质量四面体网格，确保计算精度</li>
        <li><strong>边界条件</strong> - 基于患者实际血流参数的入口边界条件</li>
        <li><strong>求解设置</strong> - 稳态和瞬态分析，考虑脉动血流特性</li>
        <li><strong>后处理</strong> - 提取关键血流动力学参数</li>
      </ul>
      <img src="/projects/sfa-hemodynamics/cfd-analysis.png" alt="CFD仿真分析" class="w-full max-w-2xl mx-auto rounded-lg shadow-md my-4" />
      
      <h3>5.数据处理</h3>
      <p>模拟的结果为阻塞区域上游血管内壁的壁面剪切力（Wall Shear Stress - WSS），会被计算为4种常用于心脑血管疾病的血流动力学指标：</p>
      <ul>
        <li><strong>TAWSS (Time-Averaged Wall Shear Stress)</strong> - 时间平均壁面剪切应力</li>
        <li><strong>OSI (Oscillatory Shear Index)</strong> - 振荡剪切指数</li>
        <li><strong>TSVI (Time-Space Variance Index)</strong> - 时空变异指数</li>
        <li><strong>TransWSS (Transverse Wall Shear Stress)</strong> - 横向壁面剪切应力</li>
      </ul>
      <p> 由于血管再次狭窄和病人拍摄影像时的姿势变化导致的模型变化，使得不同时间节点的模拟结果无法做到点对点的对比.</p>
      <p> 解决方案：在Rhinoceros中提取几何模型的中心线，沿中心线以轴向每1mm进行分割，再对分析结果进行径向360次分割，经过投影和求平均值，不同的3D分析结果可以被二维化，
      转换为一个二维数组（轴向长度（mm）*365）以便比较</p>
      <p> 各时间节点的血管在狭窄程度则是通过沿中心线做切面面积的近似圆的半径量化，为探究手术后再狭窄，各个时间点的再狭窄程度和他们的高危区域并交比会被比较</p>
      <p>根据相关研究，可以进行统计分析（66%和33% percential），以得出高风险区域，之后对同一病人不同时间节点的高风险区域进行并交分析</p>
      <img src="/projects/sfa-hemodynamics/post-processing.png" alt="后处理" class="w-full max-w-2xl mx-auto rounded-lg shadow-md my-4" />
      
      <h3>6.结果分析</h3>
      <p>通过对3例患者的随访数据分析，得出以下主要发现：</p>
      <ul>
        <li><strong>整体相关性分析</strong> - 综合考虑所有随访结果，本研究未发现术前完全阻塞模型上游识别的关键区域与术后识别的关键区域之间存在明确直接的相关性，以及与下游管腔直径变化的相关性</li>
        <li><strong>患者个体分析</strong> - PT1的7个月随访(7M FU)和PT2的11个月随访(11M FU)显示相似的下游管腔直径变化率(-25.64%和-25.81%)，但相似性指数差异显著。一组指数始终低于50%(0.15-0.41)，另一组在0.52-0.66之间变化</li>
        <li><strong>时间一致性</strong> - 聚焦于单个患者时，相似性指数与管腔直径变化率之间存在显著一致性。PT1的2周和7个月随访的相似性指数高度一致：TAWSS33为0.18和0.15，OSI66为0.39和0.35，transWSS66为0.40和0.41，TSVI66为0.34和0.32</li>
        <li><strong>高风险区域识别</strong> - 通过统计分析(66%和33%百分位数)成功识别出高风险区域，为临床监测提供了重要参考</li>
      </ul>
      <img src="/projects/sfa-hemodynamics/results-analysis.png" alt="结果分析" class="w-full max-w-2xl mx-auto rounded-lg shadow-md my-4" />
      
      <h3>7.临床意义与展望</h3>
      <p>本研究为SFA再血管化手术的<strong>个性化治疗</strong>提供了重要依据：</p>
      <ul>
        <li><strong>术前评估</strong> - 通过CFD分析预测手术效果</li>
        <li><strong>手术优化</strong> - 指导支架选择和放置策略</li>
        <li><strong>术后监测</strong> - 识别高风险患者进行重点随访</li>
        <li><strong>未来研究</strong> - 扩展到其他血管疾病的应用</li>
      </ul>
      <img src="/projects/sfa-hemodynamics/clinical-significance.png" alt="临床意义与展望" class="w-full max-w-2xl mx-auto rounded-lg shadow-md my-4" />
    `
  },
  {
    title: 'iPod电池门设计 (2025)',
    description: '关注可装配性与空间利用的创新设计，在有限空间内实现最佳的功能性和用户体验。',
    imageAlt: 'Apple设计挑战封面',
    imageSrc: '/projects/apple-design-challenge-cover.png',
          fullDescription: `
        <p>给现有的iPod设计一个按钮-电池门结构，旨在考察在小空间内的设计合理性和可装配性。</p>
      `,
          designProcess: `
        <h3>1.用户需求</h3>
        <p>设计过程从<strong>用户需求分析</strong>开始， 功能要求电池门<strong>工作时需紧闭，用户更换电池时需要按下按钮使电池们弹起</strong>。除了功能（Function）要求。此设计还考虑了用户体验：1.大约10牛和3毫米的按钮行程更方便做了指甲的女士/老幼用户的使用。2.减少暴露的部件，使其更符合iPod的简约设计。</p>
        <p>3. 通过设计减少电池和其他零件的震动，减少噪音。除这些外，由于项目的情景是给iPod添加新的电池盒，设计将会尽可能地减少占用空间。</p>
        <img src="/projects/apple-design-challenge/user-needs.png" alt="用户需求分析" class="w-full rounded-lg shadow-md my-4" />
        
        <h3>2.设计概览</h3>
        <ul>
          <p>设计根据需求将功能拆解为三个模块，由不同部件配合实现：</p>
          <li><strong>门限位</strong> - 模块化的限位结构（Retention mechanism）</li>
          <li><strong>开门向上旋转</strong> - 门栓 + 双纽簧</li>
          <li><strong>结构支撑+电池限位</strong> - 电池盒</li>
        </ul>
        <img src="/projects/apple-design-challenge/design-overview.png" alt="设计概览" class="w-full rounded-lg shadow-md my-4" />
        
        <h3> 3.功能验证</h3>
        <p>经过CAD数模和简单计算验证，设计提供35度开门角度，为用户提供足够空间。考虑小空间内的到装配场景，两个sub-assembly都采用snap-fit结构，方便装配。</p>
        <img src="/projects/apple-design-challenge/technical-details.png" alt="技术细节" class="w-full rounded-lg shadow-md my-4" />
        <p>限位结使用塑料的弹性形变，在未被下压的时候像两侧伸展，在与门栓一起下压时受外壳的限制，向内压缩。门旋转机构为纯旋转，设计初期考虑过已衣柜门铰链为参考的铰链结构，但考虑到iPod的机身空间，最终选择纯旋转方案。</p>
        
        <h3>4.限位模块细节</h3>
        <ul>
          <li><strong>2个翅片允许自锁装配（左下）</strong>- 减少总装步骤和难度 </li>
          <li> <strong>“Push-Push结构 (右)”</strong> - 易用且成熟的结构</li>
        </ul>
        <img src="/projects/apple-design-challenge/retention-mechanism.png" alt="限位模块细节" class="w-full rounded-lg shadow-md my-4" />
        
        <h3>5.BOM</h3>
        <p>下图为设计所需的所有组件和材料，所有外观件都需要经过表面处理减少划痕和提高更美观度。关于与门闩对手的夹爪，POM因其耐用性和自润滑特性曾被考虑为备选材料，但是因为POM较高缩率无法满足公差要求，故用回ABS。使用textured mould 进一步提高抗划痕能力。</p>
        <img src="/projects/apple-design-challenge/bom.png" alt="物料清单" class="w-full rounded-lg shadow-md my-4" />
        
        <h3>6.失效分析</h3>
        <p>失效分析重点关注夹爪的失效模式，通过有限元分析，发现夹爪在长期使用后可能出现塑性变形，通过增加夹爪的厚度+改变材料，提高其抗塑性变形能力。</p>
        <p>注： 1. 夹爪的形变主要由底部是夹爪与门闩接触驱动，更适合使用dynamic analysis，由于时间限制，本项目采用了静力分析来模拟工况。2. 缺乏真实数据与时间限制，没有进行疲劳分析。 3.下图为安全系数，为最大应力与材料屈服应力之比。</p>
        <img src="/projects/apple-design-challenge/failure-analysis.png" alt="失效分析" class="w-full rounded-lg shadow-md my-4" />
   
        
        <h3>7.总结</h3>
        <p>这个短期的设计项目成功实现了以下目标：</p>
        <ul>
          <li> <strong>功能完整性</strong> - 满足所有设计要求，实现可靠的开关功能</li>
          <li> <strong>装配友好性</strong> - 模块化设计，简化装配流程</li>
          <li> <strong>用户体验优化</strong> - 考虑不同用户群体的使用需求</li>
          <li> <strong>空间效率</strong> - 在有限空间内实现最佳布局</li>
          <li> <strong>可靠性保障</strong> - 通过失效分析确保长期稳定性</li>
        </ul>
        <p> 但也有不少改进空间：</p>
                <ul>
          <li> <strong>可制造性</strong> - 啥也别说了，没做过塑料件</li>
          <li> <strong>装配友好性</strong> - 看到那个高按钮了吗，CAD里可以装进不过难度会很大。初始设计想做更美观的无按钮设计（push-push结构可以通过按压两次电池们触发），仔细审题后打算加一个按钮导致设计复杂度增加。</li>
          <li> <strong>失效分析</strong> - 学生liscense过期了，没有进行合适的模拟</li>
          <li> <strong>公差控制</strong> - 控制按钮顶端到上盖的尺寸链很长，突出/下凹与外壳表面控制难度高</li>
        </ul>
        <img src="/projects/apple-design-challenge/summary.png" alt="项目总结" class="w-full rounded-lg shadow-md my-4" />
      `
  }
]
