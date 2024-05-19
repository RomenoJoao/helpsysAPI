export interface GroupedOption {
  label: string;
  icon: string;
  value: string;
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: "Engenharia Química",
    icon: "<icon_svg_eng_quimica>",
    value: "EQUI"
  },
  {
    label: "Engenharia Civil",
    icon: "<icon_svg_eng_civil>",
    value: "EC",
  },
  {
    label: "Engenharia Informática",
    icon: "<icon_svg_eng_informatica>",
    value: "EINF",
  },
  {
    label: "Engenharia de Produção Industrial",
    icon: "<icon_svg_eng_producao_industrial>",
    value: "EPI",
  },
  {
    label: "Engenharia Mecânica",
    icon: "<icon_svg_eng_mecanica>",
    value: "EMEC",
  },
  {
    label: "Engenharia Electrotécnica",
    icon: "<icon_svg_eng_electrotecnica>",
    value: "EELEC",
  },
  {
    label: "Gestão",
    icon: "<icon_svg_gestao>",
    value: "GES",
  },
  {
    label: "Economia",
    icon: "<icon_svg_economia>",
    value: "ECOM",
  },
];
