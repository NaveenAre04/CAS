import React from "react";
import Menu from "./Menu";
import Grid from "@material-ui/core/Grid";


const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white",
  children,
}) => {
  return (
    <div>
        <Menu></Menu>
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          {/* <h2 className="display-4">{title}</h2>*/}
          <p className="lead">{description}</p> 
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          {/* <h4>If you got any questions, feel free to reach out</h4>
          <button className="btn btn-warning btn-lg" style={{borderRadius:5,fontSize:12}}>Contact US</button> */}
          <Grid container>
            <Grid item xs={3} style={{marginTop:"1.5%"}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoVi9zYRd0oECbzz0Qpxz6G3-9Yo81orrbjFveKLNmmsPJllJD&usqp=CAU"></img>
            </Grid>
            <Grid item xs={3} style={{marginTop:"-2%"}}>
              <img src="https://www.brandcrowd.com/gallery/brands/pictures/picture14948547288383.png"></img>
            </Grid>       
            <Grid item xs={2} style={{marginTop:"1%"}}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABj1BMVEUkKDPv9fXc2t2rpqKJi7QDTXKsqaTk7O7f3eCix+Kd2Nbh3+IiJjHv9fbz+fnj4eQeIi74/v4AABiChLCTkZQAABXv7+8OFCNjt70TGCYABhuoo58XHCmmqq7U0tUAkYoARm0AQmtER0/d4+mLiYwAO2Y0OEEAQ2ylyePY3eYAABCysbOTl5sSVXVxcnguLi6+vL9oZ2nD0uBLTlZ5fYIYEyMAAAC7wMJefH8ANkdaoagQGSZ9qalcXmQ7PkZKX2WLiofKyMxRUlEjIyO3zuJ1kqVqamnD4fFojI2coaQXYWAlHipVWV+Gt7cWDCA1Q0tBfYO1ztEANVgAKUQAQVoaXXc+Y3hbfY+HnqucsbxXrbSZy9C8290BPU4AVG1LbXesvshPZmw9T1VLjZJFcY6p09cWFxaGpcRMXoNsaYFQUXIoM2Rne55qiaA8a4mNiZaStNNSZYkAIFQALVyqrcpmR5CBZJ55c6amlrnCxteVgK65vNFnRJB1VpaFaaGcibMPdnMgOD8gNz8UaGUcSEvmlNyUAAAWTElEQVR4nO2di3/TRrqGHSVYMtZlZBwL27IaLEUkyCh2rNSUYBOTlMWNgXJKT7ksPfRyStttgXMW2tIu3W5P//Azo5tHdyuxE3d/elsgBNmRH38z7zffXJzLZcqUKVOmTJkyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKdORRIOqULMkiIA+7dv5UwkIJbXfavQkgiCkXkMZg1oVnPZN/UlEVy91R8QSz7rieUZqqSXxtO/sTyBayLVkiG7JK8hQ0oXqad/dokugRwy/FCqWJ5VaFoExApcUxh93uHi5X8pcJEpCk4iIvEkEauK/vYcc8RWWjNjQswGSXWHGtzulRKfjoKv0PJsA0MdC+mSNXm3wDO4VUfxYvTanG4/Vzq0rO2ZYgNzts7k58hPblQqhKV26JEwfh3SthzdcRpZJkoSNlXcTGJctr6zO7+Yjdefs2dt3d+jczufwi515/qTVD88/vkcghkYXDRqmeasueeix9/7jo4/u3//44//85JP3Hzx8+PTp9qZLdolvleZ5++ECENvZW9U7t+Af6lz96/CLq1cfPXp0/vFfSaYiNYzBbmK+sarxS3jTvXf/yZMn73365L33nvzXk0/fe++jjz56wDr4lnjjFPq/nSsQ3OPb8Lcrcw2+HDiPCTJkWSWBX63ltVx288KZM5fhf/D/+59evn///pP7D7HekO2fQgJ459pZU7fvzPXH0HctcI+u2vqwO4iPdrHvS1jYhxcRuTNnLILo/3XZxQfjj8ydQv5y57GJL9E3aCCKRy9zgOs2tkd2AF5P6P1oMWCv36+duezDt417MTucjX2IQoowFq+Y+JLSlqo4NhS9K9aqR8rgDr8471VST1vq+bMUHsIz6Tn4Lp+5cM9zEW/MYgAsGFpnderXaEff7Z241wN2yxLHFTmOaI/0waqw68QOANMF5OFVh5vdfA/jrw803aUl2Wq5Lj7I7+JDL2NyBkXA6ohdYnrN2nTPtHPL6vvOXovp/MBA4ghLlMmwpQ8AZAhAs9MfTBOO4Kor6L+Prn6RgK8mBeorT9fPePHB3x94r2Ibx3ffGgGTS5Jp0NNEMlCR895FDfhWJD+gShSBCzK8MYIM+/WhJPXKzcS+gr776NFVjOD5D+ORg04g+NgHawF8a+978THs8VN/QWNMfqRRSg4LZLzXdsBODv55JepyoV0kvOJ0naO4YbvCVjSmkh9XE+4afIZiDuv6rsff2mog+Jb4T0LwfeJ359Gxw4+meyY/kiH6tQSA4DNI7Q587fSd64+j8IE+56c3GhSLnKQxalMX+hSb76tC7IDWcY5HThDGOwfoBqss/OUgvjNf+q5jyOOPfelSX1qyAPYGQvx9Xr/9ud3GwU5k8DW8TZeghl8NiyNlT+o3eny72DWINmSp9HM1oWoxBFUPS7H0xaTnMzHGd31CI1gcYB3jsHPnUHxLvD6D3FmsGaQdgaNq7PNFQ5uoNvTj29KKBOK1dbPVrvDamM1TFOwPKamh9AGMQ6Ff7uQm8Si2yo+9acsX8UOcGhnER54J4lsL4GN7Mym9VMURafGTjaQWnCAaTNouhzpBztA524OHDeVG0xhoeWriy/B7OspxJK2M2vQuoEWFqFTIv/734/NO//dhbPSBcUiFlFyb4HOCb+37wIXkbEZudG3gdIHSePU4foR1fdKNGxJquh4PJoaa0R9g30Lfs/+kzDZ9SVeUcqONMfw89h2ttkIKe/KFEHzvBx1mPKORGyj1CRtgT43vAmNVVRzfLY7290dFTi97jdjkRIQL/Vtx2NZGZQWqrNkM419jLTDiQAWDSdr3/lo0PrY1s6k3sabYXSDZEo8c1ILmsOH0rf02RexLEawiBSFS0tBlOCQqvbgEQyCDwcfec6Jv7ctt98sHQXyxz5z2pecadgDK+vTjOK9qLq3ija0tiWrf8OcxUzMkJCcO49JbOhfS9bFPXWbv33MC8WIAH8NKsyzb07Vmz05iht0px3G+Z1AnDXN/6wZXLCv+JDptHLa1clxnAppBfAz70GmxFx9uO/guPAxx6NlWTcGqLtsR2FCP8NQT56Da+1sGx93Uojq66Rly7Zg7CRmxoTHbRYfZttsNXnga0knOuugs7rZIexzXWk3dBe6Wfc6xhXd9nIQqMel5coPd6Ps1wvC5frEuy3H4+NkvvRJy1jiYXJL1tG+O1zl6FLGFtd1iuaTSfUWTqLQMuU5UV0yvKiF5C+sOeS+w8fjmMGFI18ZDC2BqY6+6wcYNtvaLVBsfAUs5ipNQ+Urtl7VUcUgNI95HmPDjE0QulS8dfM/5Cb7tk8EHO5Sa0wWmcyZadWkVv/I7B6UZnJk6F1EJUM1BhsSUDKnw3k+8pIQM2FD0PZ+MNEgH33oYvqnmQNNLFFqo+aY0dtBx8XGdfegcHcw5iopbTbDKqOV+Tu2U2xKXaM5UWCsApY7Mh4QemglyRhowWSEdF8Gmiiac5zZfKag9kuimS/8mzkFQ0lc+5+D63moC5Qx11cTkhguWRmCSNeQj1mEwS27X9xTHF7xyBiWrKNECEFImzwIebIMhJW1hXR/VDIsr2JalbiuBX7Hpb2MCaEQuYoFU3Aa7ybrVg/Xg8GS2afOxtYq/5n3Y23XwMQddDKdU1PSkoYnvVQKhxbBhnmHLtYs1clJ8WQ9ez2qntNgqVJhzEGi4Vizj9YJivx/ut8WRt6ywDbXpuWKoruIjD9AlY5fxse5I4zKEfMbpB4MX8kmLF05UAIui4sjnHFDlMQAo7yt6GXJ6G/vrQcHSAX4FW9Ewj6wN2ejIW8IqBqhCyriF5xB8zUVaKrmL9WGcPipSW95yCyqPasoYwJyljcUh15xctllwtTF5YKVSwdtZtcXz2MKzID6nYrD2gJ248OXghfJCdX0CFkUcco6B9XfKlPV9s2TaMLpCrtNqm3kfRQ3coN3G6BUKOL5KBQuUal83DKXVao1Go0YjYAnsQxsfqhK40x4fB+tVM5jpnaEEPNj2Kds5qKGWX863hxJB4XkfZNgUVB0y1A03aC1sgfhD9Dh83IuW0FShBKhLgXKzWzFAmTLv4Hs+v2LzTEQ3sSEGco490xK05bwp+IefITUcGc3dPt7vPXtZ2HAJbtuNHuEbRjU0Wg3gcyoGF2Cqxz+f9IO+y+TTWGQaKXyKt9gyilwHNmZKy+OyGGJNGbblyaMKG19/8+3fvv7u2cuNDQTRDj8O4RtFDr8D5Xq0vMoSi+Hzz5JD312oXTJgjM2y3WxYYw4JQdsz9vJeeeIQ841v6uX86IXFsOD0fogeG1l0Cc6TOxWDtedwUMc/X3OGvz58cxxyHEnCZFTG2WMOqg3h5apiVVTHRrmOAawHGW4Xnr24ebNz8+ZeuQ4Z/u1ZYXMSfTFLDfzh53R35uSQy9KPb8GCD4VB0UlGpH2O0m5CfPl8edd84TQQq0Dt7Fkt2G7Ky3nNbMt217fxXQPig/yQ9rTv7M6vvtyW4oZXYODNA3knUX6I4/OvEKIWLPhyOVEdDQkzF0HOoaA0MJ/Hyw40qKpGPiA74SkUXn77olWv71n8ynb0SfXl+vJe3PhA8K5s5u1BxzpaEOmsFvLPFPHjRRpxWAJCLTdWtCFXVjjuBqQiLed9d0lXB3U/vrrFD5nts+/+5+tvXowgw70XLwuWiddhlN6MzTFWCTz+nIoBqrEwvO0jvtWRfGPhgs8UbKRCrdMpD6Ut6KvDfLDLB7t+I8mb6zbMnNl0XMjw229efG05L6UtQ3zxpTOg4micisFFBs262fi8E22svwqxSBL1clm5BDStUb4R1kSEAD8763MGvBDiy2f2uJfKI3xJq6mxCTd3jQFKlBknCfRMdbCkukgZs09A7zbHKpA6pYgt8NVySPQdFLYrm4WNbXvItlFwnWN5uZ40vKopLj/26f+ur69fuLD+vYXvYgAfw3ZntDgITLteO5Va5XJfbUqRuzHoXIh3FAoyxCdXtgubshWElnOgC/qJwVKa2Ad89MuXz77//oGJ75O/ryP9fYKPZfvHz1loUShV1e6428yhfWPHfj5MADbebuz7InY8+IaWc1QqB+jXRqWyUSBJK2sulseGEdoF+ITiz/IP8i+2UKAt/QV1pxCnO1PEMuPj0qPFUs7QCHPLIbtESo1O7Zgr+zwS1VbSFR77lSzn2CQLCN1BpVI4QAjNnLlfFafbHVLT7V2TjgnbMGWLpVOYYcnBMenRgmhIPHZeAsvyTK9/1I3+dCDMQLec8FzgZrDrs8oE27ALlOGvCnIOiktRT68OiuFTb5NOD2YsveMeSVIVW2RwlorliaMsrKKrgtpVa2hh6OR7YsdIeCZaxeihojR1UDiQ7VrLwYbpItsw5xukKckBIW4CyWq4xrGWf6J1DXrEVAHLS6nu1rxjUJbQQihN6QNnBzjdVfXEUpqAtd42YTsHdA1ywy2XbhJFJeX91LpS1PSl+QK13DEbLqB70fMsLF9Od9KE2LW3EFFWJb6vilVx19DL0QUS55GT3G854BxmABZQx5e2OYBLnQiALMtOvX0qUtVu+LoGR7BrSPETwACf9IEd1ajRaBl9pV9O3HCHdX7LlnMg19iwXAN9jcYc3BHWoIilscb4z8GBnbs8GhzbHYU+GztLxcDhDJj+hwiehQNFTSlDKX1j1NDHOQCbcvSrB1jq4ow5Dkx0m6ZzkNA5IpcGxQvUxE6DgMTcM5iWpFFXOMaSbVvVfvwUn/lGyVMfk+HdQkS1TXrl5sDQ2iOYren6WBVBxLuB4TOdw+nyNiDCbdgNysg5jjyNDXNaYWy0GpqmjRS9WaqlXTAR+qTdCTw0nA6fqJ9+6UJ1hM9vSxY9pam2DKM8aEKhGTEdekrIvl5R9485XNdA3ksemM4RvS4yWUA0p5KEKdPGRNEA6/dgM2XszFKWvT0F35tyDsWZmWyjqjElQXQWQK1TNkx8SN1xYzgyBuJkX68pUfE4x6bjHJZrFApHc455qtTDmi67+er1K97sVX/4ceXV5hJGcMqd1jRtV9vbWqOhDaUiMWw3WiZD+Lve71r8BgZn7+ttijV3/9ruJHGxnOPAHW/AMev2BnIOar4HdqSTuwyYQfBWzq2svP5J5tlNSG/l3LmVNxg/JlcTXEVGAN1dri+januxaG4jQAwJDjEsK1YcwpbbHNgbfM0FaWhx6aoAh2ElbNRhjTkOoFsgx7CcQ0ZjjsjJyVMQvetOx7PMKwgP6sfXb1+/tb6EOCfrB1mpMdEgih/s/VEtqW4yRJOOaBtBPQ+/Rl/BOLSbMtZBOvvLdQ1NInmd4wC5hlVyka0xxyKtAphMCLDyio3Mq3Nv3MbNYkcvRm69EfeWHUGGaNaHcOIQfc0RFkPCL8SQIiii7XGOA2fQCx2EROMP6BwLNB0huGjehMJD/F6F+HD0Ki6hvuyRFYeSy7BhMiQiVy9Tktv1mc6xUdi0F7kcbG4smHNUnXIs+0sUPW8Dtl1EakYFH53LLwdlMuwhhqgX1Opmuw7MiGP8lgnHOexf21axmSK4BQo+57gJ9lU0PQTQe1gMaUQXYUA3DN+kLQ+tOBzabbkYwtDkZ5VbUIXKcQ7UBR5Q1AI5Bz2wsJA/xdJbWflhc2IgfAPEZDBAj8RnMzQXViFLQQxHmpUeevm1TecgYJ4iH5joSNc5igvkHKLddt+8jae38hZvt7EFCsw54hjWzcUYVhzC1MbHkHKcwxyxwXRPhsmz7RzG4jRewV4Hwv/8Yzw9N/2La7emqvVkelDKnhuHnLlTV8MZUm17zIGvi5TNQj2XsC2CPsHDwGuEhYWpvI7t+n52s5ukIwJpNb7tOjLKThi6bRkytOLQEbaqFFsaGV+6AOqVz3I7OyfDUHA7tF/imu/rSWqddMxEjHPgynewILVTbLMtI4YOwIMAvsRqFX0XnQb1+Nqt6+r8GWKbrs3me+5VIO5+gZb86yts4JGAT9SnCr7ljp+yw7BYxGqtm9sHGzg+5Byx5RbROU/LYkjfmSdD2t10zSxV/gHTO9lvwOfe8G/OvZ1kLYmrQHaVqeiVjdAgdYd6uBVjDDcJLt45wJWzHj2+duVzel5xOFmBycDm+xPDbgbxsazMTSqAbNKqfTCVc+SVveg27sRhCMNk5xCvnQ3oNmSYu3O0UwNjXyu+gBXV64P4fvHNDiTgCx9zBPHp5YQrnOEyhUPcTHSOHL2T+/zKtcfhDHdgHM4wDMHAN72WjC+h8U6LrzPNVTZDPCWcYsxBA3Fn5/B6FMMZLqKiQWp8idYxTda8XA84x5QMqWmPh4MM7+Su3wphmHBwXRrVyLT4kqZpaLU+BZmyMTU9h6G1hybBOXz3guJQhQy9ETi745H9B1QGnfeVD1/iOQZ0tXtzr56PZ6hM588BhvWQZalJ92PG4We3bjv4rs0On/+UuwC+FR++aXYsASCK6lhXEMNwinl9upFdyCNT7mS3ZTK8azJ8PMOZEqDz6fBNe7CsteFgDA02HxKIUzpHGL5jvHZ4T3fE3Cytl6aZVPjSHQ0I73dXUPs6assehmmcw6vE5biJ93TMx3vl23qThO8IB1MihmDQN1AcOm05tXO4it3IcfIC3rOhg/h+8uA76oYvnCGEeDTnWE7cyHHyukSwsfhW8H/mj3UwIOoPxSZiWI+wlGR8R3OO+Un0mEcCPub4I28Uh7lmx+wO0zPMz/PjaI6kkoSt0YjHN6vdhjT66ASAGIb6cozqi9X15dBJgSzDTIVvxluW0D6tXLejJKXYuBbMOZDwjYcYvnOWfsTwzf6ADhqgtjzFMMVuu6nHHCegS5PkRf7Ha6S3UD/88Ouvv/788z/df5vbJ/kghlWTYZKj5OPfwNP5qDq6OnFf2I7RslVH2Hko/Gi+09OIIRymxMdh5INRo64q+qnwAzku7uwni14j1adwHSZ8mEa4TEtBQ70IhlFjDjCGLYNWT+vsLiBICZ/iyI8upXg+mv7ggyNnGIihYDP0QsxHOQccOxmCMGJmc9p8etGCFsOPYVkj1Vg398477/x2pPhznwJaioiGKXjZJnIHpWgwTL8kMxo6He80zJmO+yBMnog5pDYo8K93kI6Fz7ops2xjD/WgorM+gSRJhSEb76oNJvpol3mqSmvhO794Ukm1qe3wD5PeB8fHZwrF4a4Zh0bELBE6cmmEzkQmtQbDMLP4uI0jCJ0Ozvp3LrE82YpbTxXUjOnZ9wbjMOpTQ2i0VFgjHfVPbQEWqOUUiZ18+DnPMz095babww9Men/MlF6c6AHMthgHnnxaH7Nr3YtYAp1WbyjLMtHTlHHq3dCHv50wPbQoqCW7+Ho6mOUG7vSiQVWolVZLJfSpQakfa9H7/QTpmcfE9N22y5DaohW1ppWZsECddFUJgKFLj2Fm+nEbJyjwuwnvt5Nbnmj/XHWTdD6WatzvdxZp09H0ApblHi9dPoLonMwsEYaMEDKKMI8TVE5A9L/mkLBM9YNVsjdefVcmmRZDLvIpSrE6/L/ToYcSVgHkVmVy+K4Cx25/Vt/444QTFq9WySVDrLX4Bdq2kE6Hf3zw++m99askKdK5mrFQR1anEn14ip222DLXXp1OwfnfQEf/FLlMmTJlypQpU6ZMmTJlypQpU6ZMmTJlypQpU6ZMmTLNT/8P6bZKsGY01OkAAAAASUVORK5CYII="></img>
            </Grid>
            <Grid item xs={3} style={{marginTop:"0.5%"}}>
              <img src="https://3.imimg.com/data3/PQ/QQ/TDW-6533557/aurora-wp-content-themes-aurora_v1-images-icons-sewing-prod-250x250.png" style={{width:"35%"}}></img>
            </Grid>
          </Grid>
        </div>
        {/* <div className="container">
          <span className="text-muted">
            An Amazing <span className="text-white">MERN</span> Bootcamp
          </span>
        </div> */}
      </footer>
    </div>
  );
};

export default Base;